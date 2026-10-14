'use client';

import { CheckCircle2, CircleDot, MinusCircle, XCircle, type LucideIcon } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { formatDuration, type CiPanelData, type RunStatus } from '@/lib/data/ci';

// Each status has its own icon shape and a word, so color is never the only cue.
const STATUS: Record<RunStatus, { Icon: LucideIcon; className: string }> = {
  passed: { Icon: CheckCircle2, className: 'text-pass-dark' },
  failed: { Icon: XCircle, className: 'text-fail-dark' },
  running: { Icon: CircleDot, className: 'text-run-dark' },
  cancelled: { Icon: MinusCircle, className: 'text-panel-muted' },
};

const PipelinePanel = ({ data }: { data: CiPanelData }) => {
  const { t, locale } = useI18n();
  const strings = t.projects.pipeline;
  // UTC keeps the build-time HTML and the hydrated text identical.
  const date = new Intl.DateTimeFormat(locale, { dateStyle: 'medium', timeZone: 'UTC' });

  return (
    <div
      role="group"
      aria-label={`${strings.label}: ${data.repo}`}
      className="mt-5 rounded-[2px] bg-panel p-4 text-panel-ink md:p-5"
    >
      <p className="text-[0.8125rem] text-panel-muted">{data.repo}</p>
      <ul className="mt-3">
        {data.runs.map((run) => {
          const { Icon, className } = STATUS[run.status];
          return (
            <li
              key={run.id}
              className="grid gap-x-4 gap-y-1 border-t border-panel-edge py-3 first:border-t-0 first:pt-0 xl:grid-cols-[7.5rem_1fr_auto] xl:items-baseline"
            >
              <span className={`inline-flex items-center gap-2 text-[0.875rem] font-medium ${className}`}>
                <Icon size={16} aria-hidden className="shrink-0 self-center" />
                {strings.status[run.status]}
              </span>
              <span className="min-w-0 text-[0.9375rem]">
                <a
                  href={run.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-panel-edge underline-offset-4 hover:decoration-panel-ink focus-visible:outline-pass-dark"
                >
                  {run.workflow} #{run.runNumber}
                  <span className="sr-only"> ({t.projects.newTab})</span>
                </a>
                {run.branch && (
                  <span className="ml-2 text-[0.8125rem] text-panel-muted">{run.branch}</span>
                )}
              </span>
              <span className="text-[0.8125rem] tabular-nums text-panel-muted">
                {run.durationSec !== null ? `${formatDuration(run.durationSec)}, ` : ''}
                {date.format(new Date(run.startedAt))}
              </span>
            </li>
          );
        })}
      </ul>
      <p className="mt-3 border-t border-panel-edge pt-3 text-[0.8125rem] text-panel-muted">
        {data.source === 'github' ? strings.fetched : strings.snapshot}{' '}
        {date.format(new Date(data.fetchedAt))}
      </p>
    </div>
  );
};

export default PipelinePanel;
