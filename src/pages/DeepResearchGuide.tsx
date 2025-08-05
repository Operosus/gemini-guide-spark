import { PageLayout } from "@/components/PageLayout";

const DeepResearchGuide = () => {
  return (
    <PageLayout showBackButton={true}>
      <article className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-xl flex items-center justify-center text-4xl">
            🔍
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Run Deep Research
          </h1>
          <p className="text-xl text-text-secondary">
            Conduct comprehensive research in minutes. Learn how to control report length, create different outputs, and get actionable insights.
          </p>
        </header>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">What Is Deep Research?</h2>
            <p className="text-text-secondary mb-4">
              Deep Research is Gemini's AI research assistant that explores complex topics for you. It searches hundreds of websites, analyses information, and creates comprehensive reports in minutes instead of hours.
            </p>
            
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Core Concept</h3>
              <p className="text-text-secondary">
                Instead of opening dozens of browser tabs and manually piecing together research, Deep Research acts like a dedicated researcher who does the work for you and presents findings in an organised report.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">How to Run Your First Deep Research</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Step 1: Access Deep Research</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Go to gemini.google.com</li>
                  <li>Change the model to "1.5 Pro with Deep Research" (dropdown top-left)</li>
                  <li>Below the text box, click "Deep Research"</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Step 2: Enter Your Research Question</h3>
                <p className="text-text-secondary mb-2">Type a specific research question or topic. Be clear about what you need to know.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Step 3: Review the Research Plan</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Gemini creates a research plan with specific steps</li>
                  <li>Click "Edit plan" if you want to modify it</li>
                  <li>Click "Start research" when ready</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Step 4: Wait for Results</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Research typically takes 5-10 minutes</li>
                  <li>You can watch the progress or leave and return later</li>
                  <li>Gemini will notify you when complete</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Step 5: Review Your Report</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Get a comprehensive report with key findings</li>
                  <li>All sources are cited and linked</li>
                  <li>Export to Google Docs if needed</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Controlling Report Length</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Before Starting Research</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Specify Length in Your Question:</h4>
                    <ul className="list-disc list-inside text-text-secondary space-y-1">
                      <li>"Provide a brief overview of..." (shorter report)</li>
                      <li>"Give me a 2-page summary of..." (medium length)</li>
                      <li>"Create a detailed analysis of..." (longer report)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Set Clear Boundaries:</h4>
                    <ul className="list-disc list-inside text-text-secondary space-y-1">
                      <li>"Focus on the top 3 most important factors"</li>
                      <li>"Limit to key trends from the past 2 years"</li>
                      <li>"Concentrate on practical applications only"</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">During Research Planning</h3>
                <div className="bg-muted/10 border border-muted/20 rounded-lg p-4">
                  <p className="text-text-secondary">Edit the Research Plan to:</p>
                  <ul className="list-disc list-inside text-text-secondary mt-2 space-y-1">
                    <li>Remove steps that seem too broad</li>
                    <li>Add specific constraints like "focus on UK market only"</li>
                    <li>Specify "prioritise actionable insights over background information"</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">After Getting Results</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Ask for Condensed Versions:</h4>
                    <ul className="list-disc list-inside text-text-secondary space-y-1">
                      <li>"Summarise this research into 3 key points"</li>
                      <li>"Create a 1-page executive summary"</li>
                      <li>"Extract only the most actionable recommendations"</li>
                      <li>"Give me just the statistics and data points"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-6">3 Types of Research Deep Research Excels At</h2>
            
            <div className="space-y-8">
              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">1. Market & Competitive Research</h3>
                <p className="text-text-secondary mb-3"><strong>Good for:</strong> Understanding industries, competitors, market trends, opportunities</p>
                <div className="bg-black/20 rounded p-4 font-mono text-sm text-text-secondary">
                  <strong>Example prompt:</strong> "Research the current state of the AI tools market for small businesses in 2024. Include key players, pricing trends, and emerging opportunities."
                </div>
              </div>

              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">2. Educational & Academic Research</h3>
                <p className="text-text-secondary mb-3"><strong>Good for:</strong> Learning new topics, understanding complex subjects, gathering multiple perspectives</p>
                <div className="bg-black/20 rounded p-4 font-mono text-sm text-text-secondary">
                  <strong>Example prompt:</strong> "Provide a comprehensive overview of renewable energy storage technologies, including current solutions, emerging innovations, and implementation challenges."
                </div>
              </div>

              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">3. Business Intelligence</h3>
                <p className="text-text-secondary mb-3"><strong>Good for:</strong> Due diligence, strategic planning, industry analysis, trend identification</p>
                <div className="bg-black/20 rounded p-4 font-mono text-sm text-text-secondary">
                  <strong>Example prompt:</strong> "Analyse the key factors driving remote work adoption in 2024, including technology trends, employee preferences, and business outcomes."
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-6">4 Ready-to-Use Research Templates</h2>
            
            <div className="space-y-8">
              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">1. Competitive Analysis Template</h3>
                <div className="bg-black/20 rounded p-4 font-mono text-sm text-text-secondary">
{`Research the competitive landscape for [industry/product category] in [geographic region/market]. Include:
- Top 5 competitors and their market positions
- Pricing strategies and business models
- Key differentiators and unique value propositions
- Recent developments and strategic moves
- Market gaps and opportunities`}
                </div>
              </div>

              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">2. Technology Assessment Template</h3>
                <div className="bg-black/20 rounded p-4 font-mono text-sm text-text-secondary">
{`Provide a comprehensive analysis of [specific technology/tool] for [target use case]. Cover:
- Current capabilities and limitations
- Key vendors and solutions available
- Implementation requirements and costs
- Benefits and ROI potential
- Future trends and developments`}
                </div>
              </div>

              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">3. Industry Trend Analysis Template</h3>
                <div className="bg-black/20 rounded p-4 font-mono text-sm text-text-secondary">
{`Analyse current trends and future outlook for [specific industry] focusing on:
- Major trends shaping the industry in 2024-2025
- Key drivers of change (technology, regulation, consumer behaviour)
- Opportunities and challenges for businesses
- Predictions for the next 2-3 years
- Actionable insights for decision-makers`}
                </div>
              </div>

              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">4. Problem Solution Research Template</h3>
                <div className="bg-black/20 rounded p-4 font-mono text-sm text-text-secondary">
{`Research solutions for [specific business challenge] including:
- Root causes and contributing factors
- Existing approaches and their effectiveness
- Best practices from successful implementations
- Tools, technologies, or methodologies available
- Step-by-step recommendations for implementation`}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Writing Effective Research Questions</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-3">✅ Good Research Questions:</h3>
                <ul className="text-text-secondary text-sm space-y-2">
                  <li><strong>Specific:</strong> "What are the top customer service automation tools for e-commerce businesses under 50 employees?"</li>
                  <li><strong>Focused:</strong> "How has remote work impacted employee productivity in the tech industry since 2020?"</li>
                  <li><strong>Actionable:</strong> "What are the most effective content marketing strategies for B2B SaaS companies in 2024?"</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-3">❌ Avoid These:</h3>
                <ul className="text-text-secondary text-sm space-y-2">
                  <li><strong>Too broad:</strong> "Tell me about marketing"</li>
                  <li><strong>Too narrow:</strong> "What did Company X announce yesterday?"</li>
                  <li><strong>Unclear goals:</strong> "Research stuff about AI"</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Advanced Deep Research Features</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Audio Overviews</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Convert your research report into a podcast-style discussion</li>
                  <li>Perfect for reviewing findings while multitasking</li>
                  <li>Available in English with plans for more languages</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Creating Different Outputs</h3>
                <p className="text-text-secondary mb-2">After research is complete, click "Create" to generate:</p>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li><strong>Infographics:</strong> Visual summaries of key findings</li>
                  <li><strong>Quizzes:</strong> Test understanding of the research</li>
                  <li><strong>Web pages:</strong> Shareable summaries</li>
                  <li><strong>Audio Overviews:</strong> Podcast-style discussions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Collaborative Research</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Export reports to Google Docs for team collaboration</li>
                  <li>Share findings with stakeholders</li>
                  <li>Build on research with additional team input</li>
                  <li>Create presentations from research findings</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Best Practices</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-3">✅ Do:</h3>
                <ul className="text-text-secondary text-sm space-y-1">
                  <li>Start with clear, specific questions</li>
                  <li>Review and adjust the research plan</li>
                  <li>Use follow-up questions to go deeper</li>
                  <li>Export important findings to Docs</li>
                  <li>Verify critical information from original sources</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-3">❌ Don't:</h3>
                <ul className="text-text-secondary text-sm space-y-1">
                  <li>Ask overly broad questions</li>
                  <li>Expect real-time information (data may be a few months old)</li>
                  <li>Use for personal/private information research</li>
                  <li>Rely on research without reviewing source links</li>
                  <li>Skip reviewing the research plan before starting</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
            <p className="text-text-primary font-semibold">
              Remember: Deep Research is most valuable for complex topics that would normally require hours of manual research. The more specific your question, the more targeted and useful your results will be.
            </p>
          </div>
        </div>
      </article>
    </PageLayout>
  );
};

export default DeepResearchGuide;