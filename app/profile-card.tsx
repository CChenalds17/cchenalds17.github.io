import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FileText } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/custom-icons";

export default function ProfileCard() {
  return (
    <Card className="w-full md:w-[320px] px-6 py-12 shadow-lg">
      <CardContent className="p-0 space-y-8">
        {/* Profile Image */}
        <Avatar className="w-32 h-32 mx-auto">
          <AvatarImage src="/headshot.jpg" alt="Charlie Chen" />
          <AvatarFallback>CC</AvatarFallback>
        </Avatar>

        {/* Name and Contact */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">Charlie Chen</h1>
          <p className="text-muted-foreground hover:scale-101 transition-all">
            <a href="mailto:charliechen@college.harvard.edu" className="hover:text-primary transition-all">
              charliechen@college.harvard.edu
            </a>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-between px-12">
          <a href="https://github.com/cchenalds17" target="_blank" rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-primary transition-all p-2 hover:scale-110">
            <GitHubIcon className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/charliechen1742" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all p-2 hover:scale-110">
            <LinkedInIcon className="w-6 h-6" />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all p-2 hover:scale-110">
            <FileText className="w-6 h-6" />
          </a>
        </div>
      </CardContent>
    </Card> 
  )
}