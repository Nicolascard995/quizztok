import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Video, Users, Utensils } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface QuizCardProps {
  title: string
  description: string
  image: string
  category: string
  questions: number
  gradient?: string
  icon?: string
}

export default function QuizCard({
  title,
  description,
  image,
  category,
  questions,
  gradient = "from-pink-500 to-purple-500",
  icon = "video",
}: QuizCardProps) {
  const renderIcon = () => {
    switch (icon) {
      case "video":
        return <Video className="h-4 w-4" />
      case "users":
        return <Users className="h-4 w-4" />
      case "utensils":
        return <Utensils className="h-4 w-4" />
      default:
        return <Video className="h-4 w-4" />
    }
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg bg-zinc-900 border-zinc-800 hover:border-pink-500/50">
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/20 z-10" />
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        <Badge className={`absolute top-2 right-2 z-20 bg-gradient-to-r ${gradient} border-0 flex gap-1 items-center`}>
          {renderIcon()}
          {category}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-sm text-zinc-400 mt-2">{description}</p>
        <div className="mt-2 text-xs text-zinc-500">{questions} preguntas • ~5 min</div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          asChild
          className="w-full bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white border-0"
        >
          <Link href="#registro" className="flex items-center justify-center">
            Hacer Quiz <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

