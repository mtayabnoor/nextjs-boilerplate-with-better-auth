export default function Dashboard() {
  const metrics = [
    {
      label: 'Active pipelines',
      value: '18',
      detail: '+3 this week',
    },
    {
      label: 'Deploy frequency',
      value: '42/day',
      detail: 'Target exceeded by 9%',
    },
    {
      label: 'Change failure rate',
      value: '1.8%',
      detail: 'Down from 2.4%',
    },
    {
      label: 'Mean time to recover',
      value: '11m',
      detail: 'Within SLO budget',
    },
  ];

  const pipelines = [
    {
      name: 'api-gateway',
      branch: 'main',
      status: 'Ready for deploy',
      duration: '7m 12s',
      color: 'bg-emerald-500',
    },
    {
      name: 'worker-cluster',
      branch: 'release/infra-hardening',
      status: 'Running smoke checks',
      duration: '12m 48s',
      color: 'bg-amber-500',
    },
    {
      name: 'billing-web',
      branch: 'main',
      status: 'Failed on integration suite',
      duration: '5m 41s',
      color: 'bg-rose-500',
    },
  ];

  const environments = [
    { name: 'Production', health: '99.99%', summary: '4 clusters, no active incidents' },
    { name: 'Staging', health: '99.92%', summary: '2 queued rollouts awaiting approval' },
    { name: 'Preview', health: '98.74%', summary: 'Build cache pressure detected' },
  ];

  const incidents = [
    'Latency spike auto-mitigated in eu-west-1',
    'New secret rotation completed for payment services',
    'Canary deploy promoted after 15 minutes of clean traffic',
    'Two alerts deduplicated by policy engine',
  ];

  return (
    <div className='space-y-6'>
      <section className='overflow-hidden rounded-[1.75rem] border border-border/70 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--primary)18%,transparent),transparent_45%),linear-gradient(180deg,var(--card),color-mix(in_oklab,var(--muted)45%,var(--card)))] p-6 shadow-sm sm:p-8'>
        <div className='flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between'>
          <div className='max-w-2xl space-y-4'>
            <div className='inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.18em] text-primary uppercase'>
              DevOps mission control
            </div>
            <div className='space-y-3'>
              <h2 className='max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl'>
                Run deployments, infrastructure, and recovery workflows from one secure surface.
              </h2>
              <p className='max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base'>
                Your authenticated workspace is live. Delivery health, production posture, and incident response are now visible without jumping between tools.
              </p>
            </div>
          </div>

          <div className='grid gap-3 sm:grid-cols-3 lg:w-[28rem]'>
            <div className='rounded-2xl border border-border/70 bg-background/75 p-4 backdrop-blur'>
              <p className='text-xs font-medium text-muted-foreground'>Release train</p>
              <p className='mt-2 text-2xl font-semibold'>Green</p>
            </div>
            <div className='rounded-2xl border border-border/70 bg-background/75 p-4 backdrop-blur'>
              <p className='text-xs font-medium text-muted-foreground'>On-call</p>
              <p className='mt-2 text-2xl font-semibold'>2 alerts</p>
            </div>
            <div className='rounded-2xl border border-border/70 bg-background/75 p-4 backdrop-blur'>
              <p className='text-xs font-medium text-muted-foreground'>Policy score</p>
              <p className='mt-2 text-2xl font-semibold'>98/100</p>
            </div>
          </div>
        </div>
      </section>

      <section className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
        {metrics.map((metric) => (
          <div key={metric.label} className='rounded-2xl border border-border/70 bg-card p-5 shadow-sm'>
            <p className='text-sm text-muted-foreground'>{metric.label}</p>
            <p className='mt-3 text-3xl font-semibold tracking-tight'>{metric.value}</p>
            <p className='mt-2 text-xs font-medium text-emerald-600 dark:text-emerald-400'>
              {metric.detail}
            </p>
          </div>
        ))}
      </section>

      <section className='grid gap-6 xl:grid-cols-[1.3fr_0.9fr]'>
        <div className='rounded-3xl border border-border/70 bg-card p-6 shadow-sm'>
          <div className='flex items-end justify-between gap-4'>
            <div>
              <p className='text-[0.68rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase'>Release queue</p>
              <h3 className='mt-2 text-xl font-semibold'>Pipelines ready for action</h3>
            </div>
            <p className='text-xs text-muted-foreground'>Updated 45 seconds ago</p>
          </div>

          <div className='mt-6 space-y-3'>
            {pipelines.map((pipeline) => (
              <div
                key={pipeline.name}
                className='flex flex-col gap-4 rounded-2xl border border-border/70 bg-background/70 p-4 sm:flex-row sm:items-center sm:justify-between'
              >
                <div className='min-w-0'>
                  <div className='flex items-center gap-3'>
                    <span className={`size-2.5 rounded-full ${pipeline.color}`} />
                    <p className='truncate text-sm font-semibold'>{pipeline.name}</p>
                  </div>
                  <p className='mt-1 text-xs text-muted-foreground'>
                    Branch: {pipeline.branch}
                  </p>
                </div>
                <div className='flex items-center gap-6'>
                  <div>
                    <p className='text-xs text-muted-foreground'>Status</p>
                    <p className='text-sm font-medium'>{pipeline.status}</p>
                  </div>
                  <div>
                    <p className='text-xs text-muted-foreground'>Duration</p>
                    <p className='text-sm font-medium'>{pipeline.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='space-y-6'>
          <div className='rounded-3xl border border-border/70 bg-card p-6 shadow-sm'>
            <p className='text-[0.68rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase'>Environment health</p>
            <div className='mt-5 space-y-4'>
              {environments.map((environment) => (
                <div key={environment.name} className='rounded-2xl border border-border/70 bg-background/70 p-4'>
                  <div className='flex items-center justify-between gap-4'>
                    <p className='text-sm font-semibold'>{environment.name}</p>
                    <p className='text-sm font-semibold text-emerald-600 dark:text-emerald-400'>
                      {environment.health}
                    </p>
                  </div>
                  <p className='mt-2 text-xs leading-5 text-muted-foreground'>
                    {environment.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className='rounded-3xl border border-border/70 bg-card p-6 shadow-sm'>
            <p className='text-[0.68rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase'>Incident feed</p>
            <div className='mt-5 space-y-3'>
              {incidents.map((incident) => (
                <div key={incident} className='flex gap-3 rounded-2xl border border-border/70 bg-background/70 p-4'>
                  <div className='mt-1 size-2 rounded-full bg-primary' />
                  <p className='text-sm leading-6 text-foreground/90'>{incident}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
