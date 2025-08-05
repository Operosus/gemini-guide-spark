import { PageLayout } from "@/components/PageLayout";

const TakingNotesGuide = () => {
  return (
    <PageLayout showBackButton={true}>
      <article className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-xl flex items-center justify-center text-4xl">
            📋
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Taking Notes
          </h1>
          <p className="text-xl text-text-secondary">
            Automate meeting notes, organise information, and transcribe handwritten notes. Includes connected app integration and enhancement techniques.
          </p>
        </header>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">What Is Note-Taking with Gemini?</h2>
            <p className="text-text-secondary mb-4">
              Gemini can help you capture, organise, and enhance your notes across different platforms. From automatic meeting transcripts to smart note organisation, it streamlines how you record and manage information.
            </p>
            
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Core Concept</h3>
              <p className="text-text-secondary">
                Instead of frantically scribbling notes and losing key details, Gemini acts as your intelligent note-taking assistant, capturing everything, organising it properly, and making it actionable.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-6">3 Ways Gemini Helps with Note-Taking</h2>
            
            <div className="space-y-6">
              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">1. Automatic Meeting Notes</h3>
                <p className="text-text-secondary mb-2"><strong>What it does:</strong> Records and summarises Google Meet calls automatically</p>
                <p className="text-text-secondary"><strong>Best for:</strong> Team meetings, client calls, interviews, training sessions</p>
              </div>

              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">2. Smart Note Organisation</h3>
                <p className="text-text-secondary mb-2"><strong>What it does:</strong> Helps structure, summarise, and enhance your existing notes</p>
                <p className="text-text-secondary"><strong>Best for:</strong> Research notes, study materials, project documentation</p>
              </div>

              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">3. Connected Note Creation</h3>
                <p className="text-text-secondary mb-2"><strong>What it does:</strong> Creates notes directly in apps like Google Keep, Samsung Notes, etc.</p>
                <p className="text-text-secondary"><strong>Best for:</strong> Quick capture, task lists, idea documentation</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">How to Take Automatic Meeting Notes</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Step 1: Enable in Google Meet</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Start or join a Google Meet call</li>
                  <li>Look for the "Take notes with Gemini" icon (top right)</li>
                  <li>Click "Start taking notes"</li>
                  <li>Choose whether to include transcription</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Step 2: Let Gemini Work</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Gemini captures key points, decisions, and action items</li>
                  <li>A pencil icon shows when notes are being taken</li>
                  <li>You can view "Summary so far" at any time during the meeting</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Step 3: Review After Meeting</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Notes are automatically saved to Google Drive</li>
                  <li>Emailed to meeting host and note starter</li>
                  <li>Added to Google Calendar event if scheduled</li>
                  <li>Includes summary, details, next steps, and transcript</li>
                </ul>
              </div>

              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h4 className="font-semibold text-primary mb-3">What Gets Captured:</h4>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Key discussion points and decisions</li>
                  <li>Action items with suggested owners</li>
                  <li>Important quotes and details</li>
                  <li>Meeting participants and timeline</li>
                  <li>Suggested next steps with due dates</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Transcribing Handwritten Notes</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Photo to Text Feature</h3>
                <p className="text-text-secondary mb-4">Gemini can convert handwritten notes into digital text:</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Step 1: Upload Photo</h4>
                    <ul className="list-disc list-inside text-text-secondary space-y-1">
                      <li>Take a clear photo of your handwritten notes</li>
                      <li>Go to gemini.google.com</li>
                      <li>Click the attachment icon (📎) and upload the photo</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">Step 2: Request Transcription</h4>
                    <ul className="list-disc list-inside text-text-secondary space-y-1">
                      <li>Ask: "Transcribe these handwritten notes into text"</li>
                      <li>Or: "Convert this handwriting to typed text and organise it"</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">Step 3: Review and Edit</h4>
                    <ul className="list-disc list-inside text-text-secondary space-y-1">
                      <li>Check the transcription for accuracy</li>
                      <li>Ask Gemini to organise or enhance the content</li>
                      <li>Export to Google Docs if needed</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-muted/10 border border-muted/20 rounded-lg p-6 mt-6">
                  <h4 className="font-semibold text-primary mb-3">Tips for Better Results:</h4>
                  <ul className="list-disc list-inside text-text-secondary space-y-1">
                    <li><strong>Clear Writing:</strong> Ensure handwriting is legible</li>
                    <li><strong>Good Lighting:</strong> Take photos in bright, even light</li>
                    <li><strong>Straight Angle:</strong> Hold camera directly over notes</li>
                    <li><strong>High Resolution:</strong> Use your phone's main camera, not zoom</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">How to Enhance Your Existing Notes</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Step 1: Upload Your Notes</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Go to gemini.google.com</li>
                  <li>Copy and paste your notes or upload a document</li>
                  <li>Let Gemini analyse the content</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Step 2: Ask for Improvements</h3>
                <p className="text-text-secondary mb-3">Choose from these enhancement options:</p>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li><strong>Organise:</strong> "Organise these notes with clear headings and structure"</li>
                  <li><strong>Summarise:</strong> "Create a concise summary of the key points"</li>
                  <li><strong>Action Items:</strong> "Extract all action items and tasks from these notes"</li>
                  <li><strong>Expand:</strong> "Add more detail to the main points discussed"</li>
                  <li><strong>Clarify:</strong> "Explain any unclear concepts or terminology"</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Step 3: Create Study Materials</h3>
                <p className="text-text-secondary mb-3">Turn notes into learning resources:</p>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>"Create a quiz based on these notes"</li>
                  <li>"Generate flashcards for key concepts"</li>
                  <li>"Make a study guide from this material"</li>
                  <li>"Create a mind map of the main topics"</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-6">5 Ready-to-Use Note-Taking Prompts</h2>
            
            <div className="space-y-8">
              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">1. Meeting Follow-Up Notes</h3>
                <div className="bg-black/20 rounded p-4 font-mono text-sm text-text-secondary">
{`Analyse these meeting notes and create:
1. A clear summary of key decisions made
2. A prioritised list of action items with suggested owners
3. Important deadlines and milestones mentioned
4. Questions or issues that need follow-up
5. Key quotes or important details for reference`}
                </div>
              </div>

              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">2. Research Note Organisation</h3>
                <div className="bg-black/20 rounded p-4 font-mono text-sm text-text-secondary">
{`Take these research notes on [topic] and organise them into:
- Main themes and key concepts
- Supporting evidence and examples
- Conflicting viewpoints or gaps
- Practical applications or implications
- Questions for further investigation
Format with clear headings and bullet points.`}
                </div>
              </div>

              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">3. Study Guide Creation</h3>
                <div className="bg-black/20 rounded p-4 font-mono text-sm text-text-secondary">
{`Transform these class/lecture notes into a comprehensive study guide including:
- Key concepts with clear definitions
- Important formulas, dates, or facts to memorise
- Practice questions with answers
- Summary of main topics
- Connections between different concepts`}
                </div>
              </div>

              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">4. Project Documentation</h3>
                <div className="bg-black/20 rounded p-4 font-mono text-sm text-text-secondary">
{`Organise these project notes into professional documentation:
- Project overview and objectives
- Key decisions and rationale
- Timeline and milestones
- Stakeholder feedback and requirements
- Next steps and action items
- Lessons learned and recommendations`}
                </div>
              </div>

              <div className="bg-muted/10 border border-muted/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">5. Learning Notes Enhancement</h3>
                <div className="bg-black/20 rounded p-4 font-mono text-sm text-text-secondary">
{`Take these notes from [source - book, video, article] and:
- Expand on key concepts that need more explanation
- Add practical examples for abstract ideas
- Create connections to related topics I should explore
- Suggest follow-up questions or areas to research further
- Format as a clear, structured learning resource`}
                </div>
              </div>
            </div>
          </section>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
            <p className="text-text-primary font-semibold">
              Remember: The best note-taking system is one you'll actually use consistently. Start with simple automation and gradually add more sophisticated organisation as you develop good habits.
            </p>
          </div>
        </div>
      </article>
    </PageLayout>
  );
};

export default TakingNotesGuide;