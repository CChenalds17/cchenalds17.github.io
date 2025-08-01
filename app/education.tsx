export default function Education() {
  return (
    <div className="flex-1 relative pl-6 border-l border-muted-foreground/20">
      <h2 className="text-2xl font-bold mb-8">Education</h2>
      
      <div className="space-y-8">
        <div className="relative">
          <div className="absolute -left-[30px] top-[10px] w-3 h-3 rounded-full bg-muted-foreground/80 ring-3 ring-background" />
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Harvard University</h3>
            <p className="text-muted-foreground">Bachelor of Science in Electrical Engineering</p>
            <p className="text-sm text-muted-foreground">Expected May 2027</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-[30px] top-[10px] w-3 h-3 rounded-full bg-muted-foreground/80 ring-3 ring-background" />
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Relevant Coursework</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1.5">
              <li>Circuits and Electronics</li>
              <li>Signals and Systems</li>
              <li>Computer Vision</li>
              <li>Robotics Engineering</li>
              <li>Data Structures and Algorithms</li>
              <li>Systems Programming</li>
              <li>Computer Systems Architecture</li>
              <li>Web Development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
