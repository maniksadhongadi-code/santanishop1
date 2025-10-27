import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Policy - Sanatani Shop',
  description: 'Learn about our policies regarding digital marketing services, data privacy, and campaign management.',
};

export default function PolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center text-foreground">
            Our Policy
          </h1>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 border-b pb-2">Digital Marketing Services</h2>
              <p>
                At Sanatani Shop, we are committed to ethical, transparent, and effective digital marketing practices. Our policies are designed to deliver exceptional results for our clients while upholding the highest standards of integrity and respecting user privacy.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">1. Data Privacy and Collection</h3>
              <p>
                We prioritize the privacy of your customers. All data collected through marketing campaigns is handled with strict confidentiality and in compliance with data protection regulations. We use data to create targeted, relevant advertising but never share personally identifiable information with third parties without explicit consent.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">2. Advertising Campaign Transparency</h3>
               <p>
                Our clients have full visibility into their advertising spend and performance. We provide regular, detailed reports on key metrics such as reach, engagement, conversions, and return on investment (ROI). Our billing is transparent, with no hidden fees.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">3. Content and SEO Strategy</h3>
               <p>
                Our content and SEO strategies are built on "white-hat" techniques that align with search engine guidelines. We focus on creating high-quality, valuable content that earns organic rankings and builds long-term authority. We do not engage in keyword stuffing, cloaking, or other practices that could harm your brand's reputation.
              </p>
            </section>

             <section>
              <h3 className="text-xl font-semibold text-foreground mb-3">4. Social Media Management</h3>
               <p>
                We manage social media channels with the goal of building an authentic community around your brand. We commit to responsive communication, positive engagement, and creating content that reflects your brand's voice and values. We will not post misleading information or engage in spammy tactics.
              </p>
            </section>

            <section className="border-t pt-8 mt-8 text-center text-sm">
                <p>If you have any questions about our policies, please do not hesitate to contact us.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
