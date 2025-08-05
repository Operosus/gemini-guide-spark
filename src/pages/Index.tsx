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
      link: "/guide/create-gem"
    },
    {
      icon: "🎨",
      title: "Generate an Image",
      description: "Create professional images with Imagen 4. Includes prompt templates, style keywords, and tips for making changes and improvements.",
      status: "available" as const,
      link: "/guide/generate-image"
    },
    {
      icon: "🔍",
      title: "Run Deep Research",
      description: "Conduct comprehensive research in minutes. Learn how to control report length, create different outputs, and get actionable insights.",
      status: "available" as const,
      link: "/guide/deep-research"
    },
    {
      icon: "📝",
      title: "Using Canvas",
      description: "Collaborate with AI in real-time. Create documents, build apps, and develop interactive content in Gemini's shared workspace.",
      status: "available" as const,
      link: "/guide/canvas"
    },
    {
      icon: "📊",
      title: "Analysing Data",
      description: "Extract insights from spreadsheets and files using natural language. Includes question types, visualisation requests, and analysis techniques.",
      status: "available" as const,
      link: "/guide/analysing-data"
    },
    {
      icon: "📋",
      title: "Taking Notes",
      description: "Automate meeting notes, organise information, and transcribe handwritten notes. Includes connected app integration and enhancement techniques.",
      status: "available" as const,
      link: "/guide/taking-notes"
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
        <a href="https://www.operosus.com" className="text-4xl font-bold text-primary mb-4 block no-underline hover:text-primary-variant transition-colors">
          Operosus
        </a>
        <h1 className="text-2xl text-text-secondary mb-2">Gemini AI Guide Collection</h1>
        <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
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
            <h2 className="text-3xl font-semibold text-white mb-4">Google Workspace Integration</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
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
        <p className="text-white/80 mb-4">
          Created by the team at Operosus to help organisations boost productivity with AI.
        </p>
        <a 
          href="https://www.operosus.com" 
          className="inline-block px-6 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors no-underline"
        >
          Visit Operosus.com
        </a>
      </footer>
    </PageLayout>
  );
};

export default Index;
