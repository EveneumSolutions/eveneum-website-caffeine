import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from '@tanstack/react-router';
import { useGetAllJobRoles } from '../hooks/useQueries';
import { CheckCircle2, Users, Target, Award, TrendingUp } from 'lucide-react';

export function HomePage() {
  const navigate = useNavigate();
  const { data: jobRoles, isLoading } = useGetAllJobRoles();

  const reasons = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced recruiters with deep industry knowledge',
      color: 'blue',
    },
    {
      icon: Target,
      title: 'Targeted Approach',
      description: 'Customized recruitment strategies for your needs',
      color: 'green',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous screening and vetting processes',
      color: 'orange',
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Track record of successful placements',
      color: 'blue',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 md:py-32">
        {/* Geometric overlay */}
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
          <img 
            src="/assets/generated/geometric-overlay-transparent.dim_400x300.png" 
            alt="" 
            className="h-full w-full object-cover"
          />
        </div>
        
        <div className="container relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                Helping companies hire and professionals get hired
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Eveneum Solutions connects exceptional talent with outstanding opportunities. We're your trusted partner
                in staffing and recruitment.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="btn-gradient-blue" onClick={() => navigate({ to: '/for-companies' })}>
                  For Companies
                </Button>
                <Button size="lg" className="btn-gradient-green" onClick={() => navigate({ to: '/for-candidates' })}>
                  For Candidates
                </Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="absolute -right-8 -top-8 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
              <img 
                src="/assets/generated/team-collaboration.dim_800x600.jpg" 
                alt="Professional team collaboration" 
                className="relative z-10 rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Focus Section with Image */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -left-8 -top-8 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
              <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
              <img 
                src="/assets/generated/business-partnership.dim_600x400.jpg" 
                alt="Business partnership" 
                className="relative z-10 rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="order-1 space-y-6 lg:order-2">
              <h2 className="section-divider mb-8 pb-4 text-3xl font-bold tracking-tight md:text-4xl">Our Focus</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                At Eveneum Solutions, we specialize in connecting the right talent with the right opportunities. Our
                comprehensive approach ensures that both companies and candidates achieve their goals through strategic
                partnerships and personalized service.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Strategic Partnerships</p>
                    <p className="text-sm text-muted-foreground">Long-term relationships built on trust</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-secondary/20 bg-secondary/5 p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <div>
                    <p className="font-semibold text-foreground">Personalized Service</p>
                    <p className="text-sm text-muted-foreground">Tailored solutions for every client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Roles Section */}
      <section className="gradient-blue py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="section-divider mb-8 pb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Current Opportunities
            </h2>
            <p className="text-lg text-muted-foreground">Roles we're currently working on</p>
          </div>

          {isLoading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-6 w-3/4 rounded bg-muted" />
                    <div className="h-4 w-1/2 rounded bg-muted" />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="h-4 w-full rounded bg-muted" />
                      <div className="h-4 w-5/6 rounded bg-muted" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : jobRoles && jobRoles.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {jobRoles.slice(0, 6).map((role, index) => (
                <Card key={Number(role.id)} className={`card-hover-lift ${index % 3 === 0 ? 'card-blue' : index % 3 === 1 ? 'card-green' : 'card-orange'}`}>
                  <CardHeader>
                    <CardTitle className="text-xl">{role.title}</CardTitle>
                    <CardDescription>{role.location}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">{role.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{role.salary}</Badge>
                      <Button variant="ghost" size="sm" onClick={() => navigate({ to: '/contact' })}>
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <p className="text-muted-foreground">No current openings. Check back soon!</p>
            </div>
          )}

          {jobRoles && jobRoles.length > 6 && (
            <div className="mt-8 text-center">
              <Button variant="outline" onClick={() => navigate({ to: '/contact' })}>
                View All Opportunities
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="section-divider mb-8 pb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Why Choose Eveneum
            </h2>
            <p className="text-lg text-muted-foreground">What sets us apart in the recruitment industry</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              const colorClass = reason.color === 'blue' ? 'bg-primary/10 text-primary' : 
                                reason.color === 'green' ? 'bg-secondary/10 text-secondary' : 
                                'bg-accent/10 text-accent';
              return (
                <Card key={index} className="card-hover-lift text-center">
                  <CardHeader>
                    <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${colorClass}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl">{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-green py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Ready to Get Started?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Whether you're looking to hire top talent or find your next career opportunity, we're here to help.
            </p>
            <Button size="lg" className="btn-gradient-orange" onClick={() => navigate({ to: '/contact' })}>
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
