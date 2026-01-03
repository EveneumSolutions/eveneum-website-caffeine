import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { UserCircle, FileText, MessageSquare, Briefcase, CheckCircle2, Target } from 'lucide-react';

export function ForCandidatesPage() {
  const navigate = useNavigate();

  const applicationSteps = [
    {
      icon: FileText,
      title: 'Submit Your Resume',
      description: 'Share your resume and career goals with us through our contact form.',
      color: 'blue',
    },
    {
      icon: MessageSquare,
      title: 'Initial Screening',
      description: 'We review your profile and discuss potential opportunities that match your skills.',
      color: 'green',
    },
    {
      icon: Briefcase,
      title: 'Interview Process',
      description: 'We prepare you for interviews and coordinate with potential employers.',
      color: 'orange',
    },
    {
      icon: CheckCircle2,
      title: 'Offer & Placement',
      description: 'We support you through negotiations and ensure a smooth transition to your new role.',
      color: 'blue',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-green py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <UserCircle className="mx-auto mb-6 h-16 w-16 text-secondary" />
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">Career Opportunities for Professionals</h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Let us help you find your next career opportunity and achieve your professional goals
            </p>
            <Button size="lg" className="btn-gradient-orange" onClick={() => navigate({ to: '/contact' })}>
              Submit Your Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Candidate Process */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-divider mb-8 pb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
              How We Help You
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              At Eveneum Solutions, we're committed to helping professionals like you find roles that align with your
              skills, experience, and career aspirations. We don't just match resumes to job descriptions – we take the
              time to understand your unique strengths and goals.
            </p>
            <p className="text-lg text-muted-foreground">
              Our team works with leading companies across multiple industries, giving you access to opportunities you
              might not find elsewhere. We act as your advocate throughout the hiring process, providing guidance,
              preparation, and support every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="gradient-blue py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="section-divider mb-8 pb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Your Journey With Us
            </h2>
            <p className="text-lg text-muted-foreground">A simple, transparent process from application to placement</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {applicationSteps.map((step, index) => {
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

      {/* Expectations */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-divider mb-8 pb-4 text-center text-3xl font-bold tracking-tight">
              What We Look For
            </h2>
            <div className="space-y-6">
              <Card className="card-blue">
                <CardHeader>
                  <CardTitle className="text-primary">Professional Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We seek candidates who demonstrate strong skills, relevant experience, and a commitment to
                    professional growth. Your track record of achievements and continuous learning matters to us.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-green">
                <CardHeader>
                  <CardTitle className="text-secondary">Cultural Fit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Beyond technical skills, we consider how well you'll fit with potential employers' cultures and
                    values. We want to ensure you'll thrive in your new environment.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-orange">
                <CardHeader>
                  <CardTitle className="text-accent">Career Motivation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We value candidates who have clear career goals and are motivated to make meaningful contributions.
                    Your ambition and drive are important factors in our matching process.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="gradient-orange py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-divider mb-8 pb-4 text-center text-3xl font-bold tracking-tight">
              Getting Started
            </h2>
            <div className="space-y-6">
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold text-primary">Prepare Your Resume</h3>
                <p className="text-muted-foreground">
                  Ensure your resume is up-to-date, clearly formatted, and highlights your key achievements and skills.
                  Include specific examples of your impact in previous roles.
                </p>
              </div>

              <div className="rounded-lg bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold text-secondary">Define Your Goals</h3>
                <p className="text-muted-foreground">
                  Think about what you're looking for in your next role – industry, company size, role type, location
                  preferences, and salary expectations. The clearer you are, the better we can help.
                </p>
              </div>

              <div className="rounded-lg bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold text-accent">Stay Engaged</h3>
                <p className="text-muted-foreground">
                  Once you submit your resume, stay responsive to our communications. The best opportunities often move
                  quickly, and your timely responses help us advocate effectively for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Target className="mx-auto mb-6 h-16 w-16 text-primary" />
            <h2 className="section-divider mb-8 pb-4 text-3xl font-bold tracking-tight">Ready to Take the Next Step?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Submit your resume today and let us help you find the perfect opportunity to advance your career.
            </p>
            <Button size="lg" className="btn-gradient-blue" onClick={() => navigate({ to: '/contact' })}>
              Submit Your Resume Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

