import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function JoinUsPage() {
  return (
    <>
      <Header />
      
      <main>
        <h1 className="text-4xl font-serif mb-8">Join Us</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            We&apos;re building the future of physical intelligence. Join our team of engineers, 
            scientists, and researchers who are developing foundation models that will power 
            the next generation of robots.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Open Positions</h2>
          
          <div className="space-y-6">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Senior Research Scientist - Robotics</h3>
              <p className="text-muted-foreground mb-4">San Francisco, CA • Full-time</p>
              <p>
                Lead research in vision-language-action models and robot learning. 
                You&apos;ll work on cutting-edge problems in foundation models for robotics.
              </p>
            </div>
            
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">ML Engineer - Foundation Models</h3>
              <p className="text-muted-foreground mb-4">San Francisco, CA • Full-time</p>
              <p>
                Build and scale large-scale training infrastructure for multimodal models. 
                Experience with distributed training and model optimization required.
              </p>
            </div>
            
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Robotics Engineer</h3>
              <p className="text-muted-foreground mb-4">San Francisco, CA • Full-time</p>
              <p>
                Design and deploy robotic systems for data collection and model evaluation. 
                Hardware and software integration experience preferred.
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Why Physical Intelligence?</h2>
          
          <ul className="list-disc list-inside space-y-2">
            <li>Work on breakthrough research at the intersection of AI and robotics</li>
            <li>Collaborate with world-class researchers and engineers</li>
            <li>Access to cutting-edge computational resources</li>
            <li>Competitive compensation and equity</li>
            <li>Flexible work environment in San Francisco</li>
          </ul>
          
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mt-8">
            <h3 className="text-lg font-semibold mb-2">Interested in joining?</h3>
            <p>
              Send your resume and a brief note about your interest to{' '}
              <a href="mailto:careers@physicalintelligence.company" className="text-link hover:decoration-2">
                careers@physicalintelligence.company
              </a>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
} 