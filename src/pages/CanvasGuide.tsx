import { PageLayout } from "@/components/PageLayout";

const CanvasGuide = () => {
  return (
    <PageLayout showBackButton={true}>
      <article className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-xl flex items-center justify-center text-4xl">
            📝
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Using Canvas
          </h1>
          <p className="text-xl text-text-secondary">
            Collaborate with AI in real-time. Create documents, build apps, and develop interactive content in Gemini's shared workspace.
          </p>
        </header>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">What Is Canvas?</h2>
            <p className="text-text-secondary mb-4">
              Canvas is Gemini's interactive workspace where you can write documents, create code, and build apps collaboratively with AI. Think of it as Google Docs meets coding playground, all powered by AI assistance.
            </p>
            
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Core Concept</h3>
              <p className="text-text-secondary">
                Instead of back-and-forth chatting, Canvas gives you a shared workspace where you and Gemini can edit content together in real-time. Perfect for writing, coding, and creating interactive content.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">How to Start Using Canvas</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Step 1: Access Canvas</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Go to gemini.google.com</li>
                  <li>Below the text box, click "Canvas"</li>
                  <li>Or go directly to gemini.google.com/canvas</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Step 2: Start Your Project</h3>
                <p className="text-text-secondary mb-3">Type what you want to create:</p>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>"Write a blog post about remote work"</li>
                  <li>"Create a simple website for a coffee shop"</li>
                  <li>"Build a to-do list app"</li>
                  <li>"Design a quiz about marketing"</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Step 3: Collaborate & Edit</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Use the Canvas panel on the right to see your work</li>
                  <li>Edit directly in Canvas or ask Gemini to make changes</li>
                  <li>See updates happen in real-time</li>
                  <li>Export when finished</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-6">3 Main Ways to Use Canvas</h2>
            
            <div className="space-y-8">
              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">1. Document Writing & Editing</h3>
                <p className="text-text-secondary mb-3"><strong>Best for:</strong> Reports, blog posts, proposals, presentations, content creation</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Features:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>Real-time collaborative editing</li>
                      <li>Suggest edits and improvements</li>
                      <li>Adjust tone and length</li>
                      <li>Format and structure content</li>
                      <li>Export to Google Docs</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">2. Web Development & Apps</h3>
                <p className="text-text-secondary mb-3"><strong>Best for:</strong> Websites, web apps, interactive tools, games, prototypes</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Features:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>Live code preview</li>
                      <li>HTML, CSS, JavaScript support</li>
                      <li>Interactive app development</li>
                      <li>Real-time testing and debugging</li>
                      <li>Share working apps with others</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">3. Interactive Content Creation</h3>
                <p className="text-text-secondary mb-3"><strong>Best for:</strong> Quizzes, infographics, presentations, learning materials</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Features:</h4>
                    <ul className="text-text-secondary text-sm space-y-1">
                      <li>Turn research into interactive content</li>
                      <li>Create quizzes from documents</li>
                      <li>Build infographics from data</li>
                      <li>Generate audio overviews</li>
                      <li>Create shareable web experiences</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-6">5 Ready-to-Use Canvas Prompts</h2>
            
            <div className="space-y-8">
              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">1. Professional Document</h3>
                <div className="bg-black/20 rounded p-4 font-mono text-sm text-text-secondary">
{`Create a professional project proposal for [project name]. Include executive summary, objectives, timeline, budget overview, and next steps. Use a clean, business-appropriate format with clear headings and bullet points.`}
                </div>
              </div>

              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">2. Interactive Website</h3>
                <div className="bg-black/20 rounded p-4 font-mono text-sm text-text-secondary">
{`Build a responsive website for [business type] called [name]. Include a homepage with hero section, about section, services/products, and contact information. Use modern design with [colour scheme] and make it mobile-friendly.`}
                </div>
              </div>

              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">3. Educational Quiz</h3>
                <div className="bg-black/20 rounded p-4 font-mono text-sm text-text-secondary">
{`Create an interactive quiz about [topic] with 10 multiple-choice questions. Include immediate feedback for correct/incorrect answers, a scoring system, and explanations for each answer. Make it engaging and informative.`}
                </div>
              </div>

              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">4. Data Visualisation</h3>
                <div className="bg-black/20 rounded p-4 font-mono text-sm text-text-secondary">
{`Create an interactive infographic showing [data/topic]. Include charts, key statistics, and visual elements that make complex information easy to understand. Use a clean, modern design with [colour palette].`}
                </div>
              </div>

              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">5. Productivity Tool</h3>
                <div className="bg-black/20 rounded p-4 font-mono text-sm text-text-secondary">
{`Build a [specific tool - e.g., habit tracker, expense calculator, task manager] web app. Include input fields, calculation/tracking functionality, data display, and the ability to save/export results. Make it user-friendly and functional.`}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Canvas Features by Content Type</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Text Documents</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-primary">Suggest Edits</h4>
                      <p className="text-text-secondary text-sm">Highlights areas for improvement with specific suggestions</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Adjust Tone</h4>
                      <p className="text-text-secondary text-sm">Changes writing style (formal, casual, persuasive, etc.)</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-primary">Change Length</h4>
                      <p className="text-text-secondary text-sm">Expands or condenses content while keeping key points</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Reformat</h4>
                      <p className="text-text-secondary text-sm">Adjusts structure, headers, and layout</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Code & Apps</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-primary">Live Preview</h4>
                      <p className="text-text-secondary text-sm">Shows your app running in real-time</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Code View</h4>
                      <p className="text-text-secondary text-sm">Edit HTML, CSS, JavaScript directly</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-primary">Console</h4>
                      <p className="text-text-secondary text-sm">View errors and debugging information</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Add Gemini Features</h4>
                      <p className="text-text-secondary text-sm">Integrate AI capabilities into your app</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Step-by-Step: Creating Your First App</h2>
            
            <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary mb-4">Example: Building a Simple Calculator</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Start Canvas</h4>
                    <p className="text-text-secondary text-sm">Click Canvas and type "Create a simple calculator web app"</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Review the Code</h4>
                    <p className="text-text-secondary text-sm">Canvas generates HTML, CSS, and JavaScript automatically</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Test Functionality</h4>
                    <p className="text-text-secondary text-sm">Click "Preview" to see your working calculator</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Make Improvements</h4>
                    <p className="text-text-secondary text-sm">Ask for changes like "Add a clear button" or "Change to dark theme"</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Customise Design</h4>
                    <p className="text-text-secondary text-sm">Request specific colours, fonts, or layout changes</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">6</div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Share or Export</h4>
                    <p className="text-text-secondary text-sm">Copy the link to share or download the code</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
            <p className="text-text-primary font-semibold">
              Remember: Canvas works best when you start simple and build complexity gradually. Don't hesitate to experiment and iterate, that's what makes it powerful!
            </p>
          </div>
        </div>
      </article>
    </PageLayout>
  );
};

export default CanvasGuide;