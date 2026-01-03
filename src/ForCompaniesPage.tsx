import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { Building2, Search, Users, CheckCircle, Shield, TrendingUp } from 'lucide-react';

export function ForCompaniesPage() {
  const navigate = useNavigate();

  const processSteps = [
    {
      icon: Search,
      title: 'Understanding Your Needs',
      description: 'We start by deeply understanding your company culture, role requirements, and hiring goals.',
      color: 'blue',
    },
    {
      icon: Users,
      title: 'Candidate Sourcing',
      description: 'Our team leverages extensive networks and advanced tools to identify qualified candidates.',
      color: 'green',
    },
    {
      icon: CheckCircle,
      title: 'Screening & Vetting',
      description: 'Rigorous evaluation process including skills assessment, interviews, and reference checks.',
      color: 'orange',
    },
    {
      icon: TrendingUp,
      title: 'Presentation & Placement',
      description: 'We present top candidates and support you through the interview and hiring process.',
      color: 'blue',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-blue py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Building2 className="mx-auto mb-6 h-16 w-16 text-primary" />
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">Recruitment Solutions for Companies</h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Partner with us to build exceptional teams that drive your business forward
            </p>
            <Button size="lg" className="btn-gradient-orange" onClick={() => navigate({ to: '/contact' })}>
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Recruitment Support */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-divider mb-8 pb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
              How We Support Your Hiring
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              At Eveneum Solutions, we understand that finding the right talent is critical to your success. Our
              recruitment support goes beyond simply filling positions – we become your strategic hiring partner.
            </p>
            <p className="text-lg text-muted-foreground">
              We take the time to understand your company culture, business objectives, and specific role requirements.
              This deep understanding allows us to identify candidates who not only have the right skills but also align
              with your organizational values and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="gradient-green py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="section-divider mb-8 pb-4 text-3xl font-bold tracking-tight md:text-4xl">Our Process</h2>
            <p className="text-lg text-muted-foreground">A proven approach to finding your ideal candidates</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const colorClass = step.color === 'blue' ? 'bg-primary/10 text-primary' : 
                                step.color === 'green' ? 'bg-secondary/10 text-secondary' : 
                                'bg-accent/10 text-accent';
              const cardClass = step.color === 'blue' ? 'card-blue' : 
                               step.color === 'green' ? 'card-green' : 
                               'card-orange';
              return (
                <Card key={index} className={`card-hover-lift ${cardClass}`}>
                  <CardHeader>
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${colorClass}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Target Clients */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-divider mb-8 pb-4 text-center text-3xl font-bold tracking-tight">
              Who We Work With
            </h2>
            <div className="space-y-6">
              <Card className="card-blue">
                <CardHeader>
                  <CardTitle className="text-primary">Startups & Scale-ups</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Fast-growing companies need agile recruitment solutions. We help startups build their founding teams
                    and scale-ups expand rapidly without compromising quality.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-green">
                <CardHeader>
                  <CardTitle className="text-secondary">Mid-Market Companies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Established businesses require strategic hiring to maintain growth. We provide the expertise and
                    resources to fill critical roles and build specialized teams.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-orange">
                <CardHeader>
                  <CardTitle className="text-accent">Enterprise Organizations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Large organizations need scalable recruitment solutions. We handle bulk hiring, executive search, and
                    specialized recruitment across multiple locations and departments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="gradient-orange py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-divider mb-8 pb-4 text-center text-3xl font-bold tracking-tight">
              Engagement Models
            </h2>
            <div className="space-y-6">
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold text-primary">Contingency Recruitment</h3>
                <p className="text-muted-foreground">
                  Pay only when we successfully place a candidate. Ideal for individual roles and companies looking for
                  flexible, risk-free recruitment support.
                </p>
              </div>

              <div className="rounded-lg bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold text-secondary">Retained Search</h3>
                <p className="text-muted-foreground">
                  Dedicated recruitment for senior and specialized roles. We commit exclusively to your search with a
                  structured process and guaranteed results.
                </p>
              </div>

              <div className="rounded-lg bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold text-accent">Recruitment Process Outsourcing (RPO)</h3>
                <p className="text-muted-foreground">
                  We become your extended recruitment team, managing your entire hiring process or specific functions.
                  Perfect for companies with ongoing, high-volume hiring needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assurance Policy */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Shield className="mx-auto mb-6 h-16 w-16 text-primary" />
            <h2 className="section-divider mb-8 pb-4 text-3xl font-bold tracking-tight">Our Assurance to You</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              We stand behind the quality of our placements. If a candidate doesn't work out within the guarantee period,
              we'll find a replacement at no additional cost.
            </p>
            <p className="text-lg text-muted-foreground">
              Our success is measured by your satisfaction and the long-term success of our placements. We're committed
              to building lasting partnerships based on trust, quality, and results.
            </p>
            <div className="mt-8">
              <Button size="lg" className="btn-gradient-blue" onClick={() => navigate({ to: '/contact' })}>
                Start Your Hiring Journey
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

