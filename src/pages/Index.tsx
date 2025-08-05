import { PageLayout } from "@/components/PageLayout";
import { GuideCard } from "@/components/GuideCard";

const Index = () => {
  const coreGuides = [
    {
      icon: "✏️",
      title: "Write a Good Prompt",
      description: "Master the fundamentals of prompt engineering with the 4 C's framework. Includes ready-to-use templates and examples for different techniques.",
      status: "available" as const,
      link: "/guide/prompt-engineering"
    },
    {
      icon: "💎",
      title: "Create a Gem",
      description: "Build custom AI assistants for repetitive tasks. Learn how to create, manage, and add knowledge to your personal team of AI experts.",
      status: "available" as const,
      link: "/guide/create-gem",
      requiresEmail: true
    },
    {
      icon: "🎨",
      title: "Generate an Image",
      description: "Create professional images with Imagen 4. Includes prompt templates, style keywords, and tips for making changes and improvements.",
      status: "available" as const,
      link: "/guide/generate-image",
      requiresEmail: true
    },
    {
      icon: "🔍",
      title: "Run Deep Research",
      description: "Conduct comprehensive research in minutes. Learn how to control report length, create different outputs, and get actionable insights.",
      status: "available" as const,
      link: "/guide/deep-research",
      requiresEmail: true
    },
    {
      icon: "📝",
      title: "Using Canvas",
      description: "Collaborate with AI in real-time. Create documents, build apps, and develop interactive content in Gemini's shared workspace.",
      status: "available" as const,
      link: "/guide/canvas",
      requiresEmail: true
    },
    {
      icon: "📊",
      title: "Analysing Data",
      description: "Extract insights from spreadsheets and files using natural language. Includes question types, visualisation requests, and analysis techniques.",
      status: "available" as const,
      link: "/guide/analysing-data",
      requiresEmail: true
    },
    {
      icon: "📋",
      title: "Taking Notes",
      description: "Automate meeting notes, organise information, and transcribe handwritten notes. Includes connected app integration and enhancement techniques.",
      status: "available" as const,
      link: "/guide/taking-notes",
      requiresEmail: true
    }
  ];

  const workspaceGuides = [
    {
      icon: "📧",
      title: "Gemini in Gmail",
      description: "Write better emails faster with AI assistance. Includes email drafting, refinement options, and inbox management features.",
      status: "coming-soon" as const
    },
    {
      icon: "📄",
      title: "Gemini in Google Docs",
      description: "Enhance your writing process with AI-powered content generation, editing suggestions, and document formatting assistance.",
      status: "coming-soon" as const
    },
    {
      icon: "💾",
      title: "Gemini in Google Drive",
      description: "Organise files, create summaries, and manage documents more efficiently with AI-powered file management and search capabilities.",
      status: "coming-soon" as const
    },
    {
      icon: "📈",
      title: "Gemini in Google Sheets",
      description: "Analyse data, create formulas, and generate insights with AI assistance directly in your spreadsheets for better decision-making.",
      status: "coming-soon" as const
    },
    {
      icon: "📊",
      title: "Gemini in Google Slides",
      description: "Create compelling presentations with AI-generated content, design suggestions, and automated formatting for professional results.",
      status: "coming-soon" as const
    },
    {
      icon: "📱",
      title: "Gemini Mobile Apps",
      description: "Access Gemini's power on the go with mobile-specific features, voice interactions, and on-device capabilities.",
      status: "coming-soon" as const
    }
  ];

  return (
    <PageLayout>
      <header className="text-center mb-12 glass-card rounded-2xl p-12">
        <a href="https://www.operosus.com" className="flex justify-center mb-6 no-underline group">
          <img 
            src="/lovable-uploads/845a0eeb-2280-4900-a81e-33315101573c.png" 
            alt="Operosus Logo" 
            className="h-16 w-auto group-hover:scale-105 transition-transform"
          />
        </a>
        <h1 className="text-2xl text-text-primary mb-2 flex items-center justify-center gap-3">
          <img 
            src="/lovable-uploads/7c51181d-f3f9-4409-a362-673eaca665f9.png" 
            alt="Gemini Logo" 
            className="h-8 w-auto"
          />
          AI Guide Collection
        </h1>
        <p className="text-text-primary max-w-2xl mx-auto leading-relaxed">
          Comprehensive guides to help your team master Google's Gemini AI suite. 
          From basic prompting to advanced features, get started quickly with practical, 
          copy-paste ready templates and best practices.
        </p>
      </header>

      <main>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {coreGuides.map((guide, index) => (
            <GuideCard key={index} {...guide} />
          ))}
        </div>

        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-text-primary mb-4">Google Workspace Integration</h2>
            <p className="text-text-primary max-w-2xl mx-auto">
              Learn how to use Gemini within your existing Google Workspace applications 
              for seamless productivity improvements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workspaceGuides.map((guide, index) => (
              <GuideCard key={index} {...guide} />
            ))}
          </div>
        </section>
      </main>

      <footer className="text-center glass-card rounded-2xl p-8">
        <p className="text-text-primary mb-4">
          Created by the team at Operosus to help organisations boost productivity with AI.
        </p>
        <a 
          href="https://www.operosus.com" 
          className="inline-block px-6 py-2 border border-primary/30 text-primary rounded-lg hover:bg-primary/10 transition-colors no-underline"
        >
          Visit Operosus.com
        </a>
      </footer>
    </PageLayout>
  );
};

export default Index;
