import { PageLayout } from "@/components/PageLayout";

const AnalysingDataGuide = () => {
  return (
    <PageLayout showBackButton={true}>
      <article className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-xl flex items-center justify-center text-4xl">
            📊
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Analysing Data
          </h1>
          <p className="text-xl text-text-secondary">
            Extract insights from spreadsheets and files using natural language. Includes question types, visualisation requests, and analysis techniques.
          </p>
        </header>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">What Is Data Analysis in Gemini?</h2>
            <p className="text-text-secondary mb-4">
              Gemini can analyse various file types (CSV, Excel, PDFs, Google Sheets) and help you understand your data through natural language conversations. Upload files and ask questions to get insights, summaries, and visualisations.
            </p>
            
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Core Concept</h3>
              <p className="text-text-secondary">
                Instead of manually combing through spreadsheets or learning complex formulas, you can simply upload your data and ask Gemini questions in plain English. It's like having a data analyst who can instantly answer your questions.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">How to Analyse Your First Dataset</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Step 1: Prepare Your Data</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Ensure data is in supported format (CSV, XLSX, Google Sheets, PDF)</li>
                  <li>Clean up obvious errors or inconsistencies</li>
                  <li>Keep file size under 100MB</li>
                  <li>Have clear column headers</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Step 2: Upload Your File</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Go to gemini.google.com</li>
                  <li>Click the attachment icon (📎) or drag and drop your file</li>
                  <li>Wait for Gemini to process and understand your data</li>
                  <li>Review the initial summary Gemini provides</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Step 3: Ask Questions</h3>
                <p className="text-text-secondary mb-2">Start with simple questions to understand your data:</p>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>"What does this data show?"</li>
                  <li>"How many rows and columns are there?"</li>
                  <li>"What are the main trends?"</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Step 4: Dig Deeper</h3>
                <p className="text-text-secondary">Ask specific analytical questions based on your needs and goals.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-6">5 Types of Questions That Work Well</h2>
            
            <div className="space-y-8">
              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">1. Descriptive Analysis</h3>
                <p className="text-text-secondary mb-3"><strong>Purpose:</strong> Understand what the data contains and basic patterns</p>
                
                <h4 className="font-semibold text-primary mb-2">Example Questions:</h4>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>"Summarise the key statistics in this dataset"</li>
                  <li>"What are the most common values in the [column name] column?"</li>
                  <li>"Show me the distribution of [specific field]"</li>
                  <li>"What's the average, median, and range for [numerical column]?"</li>
                </ul>
              </div>

              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">2. Trend Analysis</h3>
                <p className="text-text-secondary mb-3"><strong>Purpose:</strong> Identify patterns over time or across categories</p>
                
                <h4 className="font-semibold text-primary mb-2">Example Questions:</h4>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>"What trends do you see in [metric] over time?"</li>
                  <li>"How has [variable] changed from [time period] to [time period]?"</li>
                  <li>"Which [category] shows the strongest growth?"</li>
                  <li>"Are there any seasonal patterns in this data?"</li>
                </ul>
              </div>

              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">3. Comparative Analysis</h3>
                <p className="text-text-secondary mb-3"><strong>Purpose:</strong> Compare different groups, categories, or time periods</p>
                
                <h4 className="font-semibold text-primary mb-2">Example Questions:</h4>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>"Compare [metric] between [group A] and [group B]"</li>
                  <li>"Which [category] performs best on [metric]?"</li>
                  <li>"How do the top 5 [items] compare to the bottom 5?"</li>
                  <li>"What's the difference in [metric] by [category]?"</li>
                </ul>
              </div>

              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">4. Correlation & Relationship Analysis</h3>
                <p className="text-text-secondary mb-3"><strong>Purpose:</strong> Find connections between different variables</p>
                
                <h4 className="font-semibold text-primary mb-2">Example Questions:</h4>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>"Is there a relationship between [variable 1] and [variable 2]?"</li>
                  <li>"What factors seem to influence [target variable] most?"</li>
                  <li>"Show me correlations between all numerical columns"</li>
                  <li>"Which variables predict [outcome] best?"</li>
                </ul>
              </div>

              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">5. Actionable Insights</h3>
                <p className="text-text-secondary mb-3"><strong>Purpose:</strong> Get business recommendations and next steps</p>
                
                <h4 className="font-semibold text-primary mb-2">Example Questions:</h4>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>"What are the top 3 insights from this data?"</li>
                  <li>"Where should we focus our efforts based on this analysis?"</li>
                  <li>"What actions would you recommend based on these findings?"</li>
                  <li>"What questions should I investigate further?"</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">5 Step Example: Sales Data Analysis</h2>
            
            <div className="bg-muted/10 border border-muted/20 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-primary mb-3">Sample Dataset: Monthly Sales Data</h3>
              <p className="text-text-secondary mb-2">Let's say you have a CSV with columns: Date, Product, Region, Sales_Amount, Units_Sold, Customer_Type</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-text-primary mb-2">Initial Overview</h4>
                  <div className="bg-black/20 rounded p-3 font-mono text-sm text-text-secondary mb-2">
                    "Analyse this sales data and give me a summary of what it contains."
                  </div>
                  <p className="text-text-secondary text-sm"><strong>Expected Response:</strong> Overview of time range, number of products, regions covered, total sales, etc.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-text-primary mb-2">Performance Analysis</h4>
                  <div className="bg-black/20 rounded p-3 font-mono text-sm text-text-secondary mb-2">
                    "Which products and regions are performing best in terms of sales revenue? Create a table showing top 5 products by total sales"
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-text-primary mb-2">Trend Analysis</h4>
                  <div className="bg-black/20 rounded p-3 font-mono text-sm text-text-secondary mb-2">
                    "What trends do you see in monthly sales over the time period covered? Are there any seasonal patterns in the data?"
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-text-primary mb-2">Customer Insights</h4>
                  <div className="bg-black/20 rounded p-3 font-mono text-sm text-text-secondary mb-2">
                    "How do sales differ between customer types?"
                  </div>
                  <p className="text-text-secondary text-sm"><strong>Follow-up:</strong> "Which customer type has the highest average order value?"</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">5</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-text-primary mb-2">Actionable Recommendations</h4>
                  <div className="bg-black/20 rounded p-3 font-mono text-sm text-text-secondary">
                    "Based on this analysis, what are the top 3 recommendations for improving sales performance?"
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Data Analysis Best Practices</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-3">✅ Do:</h3>
                <ul className="text-text-secondary text-sm space-y-1">
                  <li><strong>Start Broad:</strong> Begin with overview questions before diving into specifics</li>
                  <li><strong>Ask Follow-ups:</strong> Build on previous answers to go deeper</li>
                  <li><strong>Request Visualisations:</strong> Ask for charts and graphs when helpful</li>
                  <li><strong>Verify Results:</strong> Cross-check important findings manually</li>
                  <li><strong>Save Key Insights:</strong> Copy important analyses to a document</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-400 mb-3">❌ Don't:</h3>
                <ul className="text-text-secondary text-sm space-y-1">
                  <li>Upload sensitive personal or confidential data</li>
                  <li>Expect perfection with messy or poorly formatted data</li>
                  <li>Ask for analyses beyond what your data can support</li>
                  <li>Assume all calculations are 100% accurate without verification</li>
                  <li>Upload files larger than the size limits</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
            <p className="text-text-primary font-semibold">
              Remember: Data analysis works best when you start with clear questions about what you want to learn. The quality of insights depends heavily on the quality and completeness of your data.
            </p>
          </div>
        </div>
      </article>
    </PageLayout>
  );
};

export default AnalysingDataGuide;