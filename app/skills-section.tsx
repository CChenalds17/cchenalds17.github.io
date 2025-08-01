export default function SkillsSection() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h2 className="text-2xl font-bold text-center">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Robotics & Hardware</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1.5">
            <li>Computer Vision</li>
            <li>Motion Tracking</li>
            <li>Robotic Control Systems</li>
            <li>Circuit Design</li>
            <li>Signal Processing</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Software & AI</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1.5">
            <li>Python</li>
            <li>C/C++</li>
            <li>MATLAB</li>
            <li>OpenCV</li>
            <li>React/TypeScript</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Research Tools</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1.5">
            <li>OpenCap</li>
            <li>Lab Equipment</li>
            <li>Data Analysis</li>
            <li>Experimental Design</li>
            <li>Technical Writing</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
