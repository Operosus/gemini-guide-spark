import { PageLayout } from "@/components/PageLayout";

const CreateGemGuide = () => {
  return (
    <PageLayout showBackButton={true}>
      <article className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-xl flex items-center justify-center text-4xl">
            💎
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Create a Gem
          </h1>
          <p className="text-xl text-text-secondary">
            Build custom AI assistants for repetitive tasks. Learn how to create, manage, and add knowledge to your personal team of AI experts.
          </p>
        </header>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">What Are Gems?</h2>
            <p className="text-text-secondary mb-4">
              Gems are custom AI assistants you can create in Gemini. Think of them as your personal team of experts, each one specialised for specific tasks or roles. Once created, they remember your instructions so you don't have to repeat yourself.
            </p>
            
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Core Concept</h3>
              <p className="text-text-secondary">
                Instead of re-typing the same complex prompts every time, create a Gem once and reuse it whenever needed. Perfect for repetitive tasks that need consistent style or approach.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Discover Ideas for Your Role</h2>
            <p className="text-text-secondary mb-4">
              📋 Copy this prompt, customise it for your department, and paste into Gemini to get personalised Gem ideas:
            </p>
            
            <div className="bg-muted/20 border border-muted/30 rounded-lg p-6 font-mono text-sm">
              <div className="text-primary font-semibold mb-2">Template</div>
              <div className="text-text-secondary whitespace-pre-line">
{`You are an AI consultant specialising in [DEPARTMENT] workflows and automation.

Context:
I work in [DEPARTMENT] at [COMPANY TYPE]. My main responsibilities include [LIST 2-3 KEY TASKS]. I want to create custom AI assistants (Gems) to handle repetitive tasks.

Task:
Suggest 8 specific Gems I could create to automate or improve my daily work, focusing on tasks I do repeatedly.

Format:
Each suggestion: Gem name + 1-2 sentences describing what it does
Order by potential time savings (highest first)
Focus on realistic, implementable automations

Constraints:
Avoid overly complex Gems; focus on clear, single-purpose assistants I could create today.`}
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">How to Create Your First Gem</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Step 1: Access Gem Manager</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Go to gemini.google.com</li>
                  <li>Look for "Gem manager" in the left sidebar</li>
                  <li>Click "New Gem"</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Step 2: Name Your Gem</h3>
                <p className="text-text-secondary mb-2">Give it a clear, descriptive name that reflects its purpose.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-green-400 font-semibold">✓ Good:</div>
                    <ul className="text-text-secondary text-sm">
                      <li>"Meeting Summariser"</li>
                      <li>"Email Proofreader"</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-red-400 font-semibold">✗ Avoid:</div>
                    <ul className="text-text-secondary text-sm">
                      <li>"Helper" or "Assistant"</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Step 3: Write Instructions</h3>
                <p className="text-text-secondary mb-4">This is where you define your Gem's personality and role. Use this structure:</p>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li><strong>Purpose:</strong> What does this Gem do?</li>
                  <li><strong>Goals:</strong> What should it achieve?</li>
                  <li><strong>Tone:</strong> How should it communicate?</li>
                  <li><strong>Format:</strong> How should it structure responses?</li>
                  <li><strong>Constraints:</strong> What should it avoid or include?</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-6">Three Ready-to-Use Gem Examples</h2>
            
            <div className="space-y-8">
              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">1. Email Proofreader Gem</h3>
                <div className="bg-black/20 rounded p-4 font-mono text-sm text-text-secondary">
{`Purpose: You are a professional email editor who improves business communications.

Goals:
- Correct grammar, spelling, and punctuation
- Improve clarity and conciseness
- Maintain professional tone
- Suggest better word choices

Format:
- Return the improved email first
- Then list 2-3 key changes made
- Keep original meaning intact

Constraints:
- Don't change the core message
- Keep the same level of formality
- Maximum 3 paragraphs for explanations`}
                </div>
              </div>

              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">2. Meeting Action Items Gem</h3>
                <div className="bg-black/20 rounded p-4 font-mono text-sm text-text-secondary">
{`Purpose: You are a meeting assistant who extracts actionable tasks from meeting notes or transcripts.

Goals:
- Identify all action items and decisions
- Assign clear owners when mentioned
- Set realistic deadlines when discussed
- Prioritise by urgency

Format:
- List action items in order of priority
- Format: "[Task] - Owner: [Name] - Due: [Date]"
- Include a brief summary of key decisions

Constraints:
- Only include explicitly mentioned tasks
- Don't assign tasks to people not mentioned
- If no deadline mentioned, write "TBD"`}
                </div>
              </div>

              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">3. Social Media Content Creator Gem</h3>
                <div className="bg-black/20 rounded p-4 font-mono text-sm text-text-secondary">
{`Purpose: You are a social media specialist who creates engaging LinkedIn posts for professionals.

Goals:
- Transform ideas into engaging LinkedIn content
- Use hooks that grab attention
- Include relevant hashtags
- Encourage engagement

Format:
- Start with an attention-grabbing first line
- 3-4 short paragraphs maximum
- End with a question or call-to-action
- Include 5-7 relevant hashtags

Constraints:
- Keep posts under 150 words
- Professional tone but conversational
- Avoid jargon unless necessary
- Don't use more than 7 hashtags`}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Adding Knowledge to Your Gems</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">What Is Knowledge?</h3>
                <p className="text-text-secondary">
                  You can upload files to give your Gem specific information about your company, industry, or processes. This makes responses more accurate and relevant to your context.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">How to Add Knowledge</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li><strong>In Gem Manager:</strong> Click "Add knowledge" when creating or editing a Gem</li>
                  <li><strong>Upload Files:</strong> Add PDFs, Word docs, text files, or web pages</li>
                  <li><strong>File Limits:</strong> Up to 32MB per file, maximum 20 files per Gem</li>
                  <li><strong>Supported Formats:</strong> PDF, DOCX, TXT, HTML, CSV, MD</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-3">✅ Pros of Adding Knowledge:</h4>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li><strong>Contextual Accuracy:</strong> Responses align with your company's specific processes</li>
                    <li><strong>Consistency:</strong> All outputs follow your established guidelines</li>
                    <li><strong>Reduced Training:</strong> Gem understands your context without lengthy explanations</li>
                    <li><strong>Brand Alignment:</strong> Content matches your organisation's voice</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-red-400 mb-3">❌ Cons of Adding Knowledge:</h4>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li><strong>Processing Time:</strong> Gems with knowledge may respond slightly slower</li>
                    <li><strong>File Management:</strong> Need to keep knowledge files updated manually</li>
                    <li><strong>Storage Limits:</strong> Limited to 20 files, so must choose carefully</li>
                    <li><strong>Context Conflicts:</strong> Too much knowledge can sometimes confuse the Gem</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-3">Best Practices for Knowledge:</h4>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li><strong>Start Small:</strong> Add 2-3 key documents initially</li>
                  <li><strong>Keep Updated:</strong> Refresh files when processes change</li>
                  <li><strong>Be Specific:</strong> Upload targeted information rather than general company docs</li>
                  <li><strong>Test Thoroughly:</strong> Verify the Gem uses knowledge appropriately</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Quick Tips for Better Gems</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Use the Magic Wand</h3>
                  <p className="text-text-secondary text-sm">
                    If you're struggling with instructions, type a basic description and click the magic wand icon (✨). Gemini will expand it into detailed instructions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Test Before Saving</h3>
                  <p className="text-text-secondary text-sm">
                    Use the preview pane to test your Gem with real examples before hitting save.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Start with Pre-made Gems</h3>
                  <p className="text-text-secondary text-sm">
                    Copy and modify existing Gems (Brainstormer, Writing Editor, etc.) rather than starting from scratch.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Best Practices</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-3">✅ Do:</h3>
                <ul className="text-text-secondary text-sm space-y-1">
                  <li>Be specific about the Gem's role</li>
                  <li>Include examples in instructions when helpful</li>
                  <li>Test with real content before saving</li>
                  <li>Give clear formatting instructions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-3">❌ Don't:</h3>
                <ul className="text-text-secondary text-sm space-y-1">
                  <li>Make instructions too vague or general</li>
                  <li>Create too many similar Gems</li>
                  <li>Forget to specify tone and style</li>
                  <li>Skip the testing phase</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
            <p className="text-text-primary font-semibold">
              Remember: Gems save you time by eliminating repetitive prompting. The more specific your instructions, the better your results will be.
            </p>
          </div>
        </div>
      </article>
    </PageLayout>
  );
};

export default CreateGemGuide;