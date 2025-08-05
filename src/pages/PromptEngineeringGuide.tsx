import { PageLayout } from "@/components/PageLayout";

export default function PromptEngineeringGuide() {
  return (
    <PageLayout showBackButton>
      <article className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
        <header className="mb-8">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-3xl bg-gradient-primary text-white mx-auto">
            ✏️
          </div>
          <h1 className="text-4xl font-bold text-text-primary text-center mb-4">
            Prompt Engineering Guide: Write a Good Prompt
          </h1>
          <p className="text-lg text-text-secondary text-center max-w-2xl mx-auto">
            Master the fundamentals of prompt engineering with the 4 C's framework. 
            Includes ready-to-use templates and examples for different techniques.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Core Principles: The 4 C's</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/50 p-6 rounded-xl">
                <h3 className="font-semibold text-text-primary mb-2">1. Clarity</h3>
                <p className="text-text-secondary">State exactly what you need.</p>
              </div>
              <div className="bg-white/50 p-6 rounded-xl">
                <h3 className="font-semibold text-text-primary mb-2">2. Context</h3>
                <p className="text-text-secondary">Provide background so the AI understands the situation.</p>
              </div>
              <div className="bg-white/50 p-6 rounded-xl">
                <h3 className="font-semibold text-text-primary mb-2">3. Constraints</h3>
                <p className="text-text-secondary">Give limits (tone, length, format, sources).</p>
              </div>
              <div className="bg-white/50 p-6 rounded-xl">
                <h3 className="font-semibold text-text-primary mb-2">4. Conciseness</h3>
                <p className="text-text-secondary">Remove unnecessary words.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Anatomy of an Effective Prompt</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white/50 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gradient-primary text-white">
                    <th className="p-4 text-left font-semibold">Building Block</th>
                    <th className="p-4 text-left font-semibold">Purpose</th>
                    <th className="p-4 text-left font-semibold">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-white/20">
                    <td className="p-4 font-medium text-text-primary">Role</td>
                    <td className="p-4 text-text-secondary">Sets the AI's perspective/expertise</td>
                    <td className="p-4 text-text-secondary">"You are a senior HR business partner…"</td>
                  </tr>
                  <tr className="border-t border-white/20 bg-white/30">
                    <td className="p-4 font-medium text-text-primary">Context</td>
                    <td className="p-4 text-text-secondary">Supplies background & goals</td>
                    <td className="p-4 text-text-secondary">"We are updating the parental-leave policy…"</td>
                  </tr>
                  <tr className="border-t border-white/20">
                    <td className="p-4 font-medium text-text-primary">Task</td>
                    <td className="p-4 text-text-secondary">Describes the action</td>
                    <td className="p-4 text-text-secondary">"Draft a 300-word announcement…"</td>
                  </tr>
                  <tr className="border-t border-white/20 bg-white/30">
                    <td className="p-4 font-medium text-text-primary">Format</td>
                    <td className="p-4 text-text-secondary">Dictates structure</td>
                    <td className="p-4 text-text-secondary">"Return in plain-text bullet points."</td>
                  </tr>
                  <tr className="border-t border-white/20">
                    <td className="p-4 font-medium text-text-primary">Tone</td>
                    <td className="p-4 text-text-secondary">Controls voice/style</td>
                    <td className="p-4 text-text-secondary">"Friendly and inclusive."</td>
                  </tr>
                  <tr className="border-t border-white/20 bg-white/30">
                    <td className="p-4 font-medium text-text-primary">Constraints</td>
                    <td className="p-4 text-text-secondary">Defines must-dos & must-nots</td>
                    <td className="p-4 text-text-secondary">"Avoid legal jargon; max 2 paragraphs."</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Prompt Templates + Concrete Examples</h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-xl mb-6">
              <p className="text-blue-800">📋 Copy each template, replace the bracketed sections, and paste straight into Gemini.</p>
            </div>

            <div className="space-y-8">
              <div className="bg-white/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-text-primary mb-4">1. Basic Instruction Prompt</h3>
                
                <h4 className="font-semibold text-text-primary mb-2">Template</h4>
                <div className="bg-gray-100 p-4 rounded-lg mb-4 font-mono text-sm">
                  <pre className="whitespace-pre-wrap">You are a [ROLE].

Context:
[RELEVANT BACKGROUND]

Task:
[WHAT YOU WANT THE AI TO DO]

Format:
- Length: [WORDS/SENTENCES]
- Structure: [BULLETS/PARAGRAPHS]
- Tone: [TONE]

Constraints:
[INCLUDE/AVOID]</pre>
                </div>

                <h4 className="font-semibold text-text-primary mb-2">Example (Marketing)</h4>
                <div className="bg-green-50 p-4 rounded-lg font-mono text-sm">
                  <pre className="whitespace-pre-wrap">You are a digital copywriter.

Context:
Our company, EcoSip, sells reusable coffee cups. We are running a summer social-media push aimed at eco-conscious Gen Z buyers.

Task:
Generate 5 Instagram caption options promoting our new pastel colours.

Format:
- Length: 25-30 words each
- Structure: 1 short sentence + 3 emojis
- Tone: Playful and upbeat

Constraints:
Do not use hashtags; mention "EcoSip" in every caption.</pre>
                </div>
              </div>

              <div className="bg-white/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-text-primary mb-4">2. Few-Shot Prompting</h3>
                <p className="text-text-secondary mb-4">Use when you want the model to mimic style or give comparable outputs.</p>
                
                <h4 className="font-semibold text-text-primary mb-2">Template</h4>
                <div className="bg-gray-100 p-4 rounded-lg mb-4 font-mono text-sm">
                  <pre className="whitespace-pre-wrap">You are a [ROLE].

Task:
Generate [NUMBER] examples similar in style to the ones below.

Examples:
1. [EXAMPLE 1]
2. [EXAMPLE 2]
3. [EXAMPLE 3]

Constraints:
- Match tone and length
- Do not repeat the sample content</pre>
                </div>

                <h4 className="font-semibold text-text-primary mb-2">Filled-In Example (Customer Support Macros)</h4>
                <div className="bg-green-50 p-4 rounded-lg font-mono text-sm">
                  <pre className="whitespace-pre-wrap">You are a customer-support specialist.

Task:
Generate 3 canned responses in the same style as the examples below, for customers asking for a shipping-status update.

Examples:
1. "Thanks for reaching out! Your order is in transit and should arrive within 2-3 business days. We'll keep you posted."
2. "We've checked on your parcel and it's moving through the network. You can expect delivery early next week. Thanks for your patience!"
3. "Good news—your package left our warehouse yesterday and is on its way. Track it anytime with the link provided."

Constraints:
- Friendly, reassuring tone
- 1-2 sentences only
- Include an apology for delays if mentioned</pre>
                </div>
              </div>

              <div className="bg-white/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-text-primary mb-4">3. Chain-of-Thought (Step-by-Step) Prompting</h3>
                <p className="text-text-secondary mb-4">Great for complex reasoning where you want transparency.</p>
                
                <h4 className="font-semibold text-text-primary mb-2">Template</h4>
                <div className="bg-gray-100 p-4 rounded-lg mb-4 font-mono text-sm">
                  <pre className="whitespace-pre-wrap">You are a [ROLE]. Think through the problem step by step before answering.

Problem:
[QUESTION OR CHALLENGE]

After reasoning, provide a concise answer under the heading "Final Answer:".</pre>
                </div>

                <h4 className="font-semibold text-text-primary mb-2">Filled-In Example (Finance Analysis)</h4>
                <div className="bg-green-50 p-4 rounded-lg font-mono text-sm">
                  <pre className="whitespace-pre-wrap">You are a financial analyst. Think through the problem step by step before answering.

Problem:
Our Q2 profit margin dropped from 18% to 12%. Identify the top three drivers using the data summary below and recommend one corrective action per driver.

Data Summary:
- Revenue: $4.2M (-5% QoQ)
- COGS: $2.9M (+8% QoQ)
- Marketing Spend: $600K (flat)
- Logistics Cost: $350K (+15% QoQ)

After reasoning, provide a concise answer under the heading "Final Answer:".</pre>
                </div>
              </div>

              <div className="bg-white/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-text-primary mb-4">4. Self-Critique / "Refine and Improve" Prompt</h3>
                <p className="text-text-secondary mb-4">Have Gemini evaluate its own draft.</p>
                
                <h4 className="font-semibold text-text-primary mb-2">Template</h4>
                <div className="bg-gray-100 p-4 rounded-lg mb-4 font-mono text-sm">
                  <pre className="whitespace-pre-wrap">Below is my draft. First, list three weaknesses. Then rewrite the draft addressing those weaknesses.

Draft:
---
[DRAFT TEXT]
---</pre>
                </div>
                <p className="text-text-secondary">Example (Policy Email) – paste your first attempt, get a refined version back.</p>
              </div>

              <div className="bg-white/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-text-primary mb-4">5. Department-Specific Idea Generator</h3>
                <p className="text-text-secondary mb-4">Use for quick win discovery.</p>
                
                <h4 className="font-semibold text-text-primary mb-2">Template</h4>
                <div className="bg-gray-100 p-4 rounded-lg mb-4 font-mono text-sm">
                  <pre className="whitespace-pre-wrap">You are an AI consultant specialising in [DEPARTMENT] workflows.

Context:
I manage [JOB DUTIES] at [COMPANY].

Task:
Suggest 10 practical ways AI chat tools could improve my daily work.

Format:
- Bullet list, 1-2 sentences each
- Order by ease of implementation</pre>
                </div>
                <p className="text-text-secondary">Swap in department names (Marketing, HR, Finance, IT, etc.) to get tailored ideas.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Quick Index of AI Uses by Department</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white/50 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gradient-primary text-white">
                    <th className="p-4 text-left font-semibold">Department</th>
                    <th className="p-4 text-left font-semibold">High Impact Use Cases</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-white/20">
                    <td className="p-4 font-medium text-text-primary">Marketing</td>
                    <td className="p-4 text-text-secondary">Social copy, A/B test ideas, personas, ad briefs</td>
                  </tr>
                  <tr className="border-t border-white/20 bg-white/30">
                    <td className="p-4 font-medium text-text-primary">Sales</td>
                    <td className="p-4 text-text-secondary">Cold-email drafts, objection handles, proposal outlines</td>
                  </tr>
                  <tr className="border-t border-white/20">
                    <td className="p-4 font-medium text-text-primary">HR</td>
                    <td className="p-4 text-text-secondary">Job ads, interview questions, policy FAQs</td>
                  </tr>
                  <tr className="border-t border-white/20 bg-white/30">
                    <td className="p-4 font-medium text-text-primary">Finance</td>
                    <td className="p-4 text-text-secondary">Budget variance summaries, what-if modelling, board-slide bullets</td>
                  </tr>
                  <tr className="border-t border-white/20">
                    <td className="p-4 font-medium text-text-primary">Ops</td>
                    <td className="p-4 text-text-secondary">SOP drafts, vendor-email templates, daily stand-up notes</td>
                  </tr>
                  <tr className="border-t border-white/20 bg-white/30">
                    <td className="p-4 font-medium text-text-primary">IT/Dev</td>
                    <td className="p-4 text-text-secondary">Code comments, regex generation, incident-postmortem drafts</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </article>
    </PageLayout>
  );
}