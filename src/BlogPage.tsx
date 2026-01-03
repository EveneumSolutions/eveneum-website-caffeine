import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useGetAllBlogPosts } from '../hooks/useQueries';
import { Calendar, User, FileText } from 'lucide-react';

export function BlogPage() {
  const { data: blogPosts, isLoading } = useGetAllBlogPosts();

  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1000000);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-orange py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <FileText className="mx-auto mb-6 h-16 w-16 text-accent" />
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">Insights & Resources</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Expert advice on hiring, career development, and industry trends
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="container">
          {isLoading ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
          ) : blogPosts && blogPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <Card key={Number(post.id)} className={`card-hover-lift ${index % 3 === 0 ? 'card-blue' : index % 3 === 1 ? 'card-green' : 'card-orange'}`}>
                  <CardHeader>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <CardDescription className="flex flex-col gap-2">
                      <span className="flex items-center gap-2 text-xs">
                        <Calendar className="h-3 w-3" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-2 text-xs">
                        <User className="h-3 w-3" />
                        {post.author}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-4 text-sm text-muted-foreground">{post.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-2xl text-center">
              <Card className="card-blue">
                <CardHeader>
                  <CardTitle className="text-2xl">Coming Soon</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We're working on creating valuable content about hiring best practices, career development tips, and
                    industry insights. Check back soon for our latest articles!
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Topics Preview */}
      <section className="gradient-multi py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-divider mb-8 pb-4 text-center text-3xl font-bold tracking-tight">
              Topics We Cover
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="card-blue">
                <CardHeader>
                  <CardTitle className="text-primary">For Companies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Effective hiring strategies</li>
                    <li>• Building strong employer brands</li>
                    <li>• Interview best practices</li>
                    <li>• Retention and engagement</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-green">
                <CardHeader>
                  <CardTitle className="text-secondary">For Candidates</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Resume writing tips</li>
                    <li>• Interview preparation</li>
                    <li>• Career development advice</li>
                    <li>• Salary negotiation strategies</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

