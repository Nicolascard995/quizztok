"use client"

import { useState } from "react"
import Image from "next/image"
import { PenLine, CheckCircle, ArrowRight, Sparkles, Video, Music } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CreateQuizSection() {
  const [activeTab, setActiveTab] = useState("personal")

  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
      <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-2">
          <div className="inline-flex items-center rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1 text-sm font-medium text-pink-500 mb-4">
            <Sparkles className="mr-1 h-3 w-3" /> Nuevo Feature
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
            Creá tu propio Quiz viral
          </h2>
          <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Ahora podés crear tus propios quizzes con tu estilo y compartirlos para que tus seguidores los hagan. ¡El
            nuevo challenge del momento!
          </p>
        </div>
        <ul className="grid gap-2">
          <li className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-pink-500" />
            <span className="text-zinc-300">Diseño aesthetic para tus redes</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-pink-500" />
            <span className="text-zinc-300">Compartí directo a TikTok, Insta y WhatsApp</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-pink-500" />
            <span className="text-zinc-300">Estadísticas en tiempo real</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-pink-500" />
            <span className="text-zinc-300">Personalización con tus colores y sonidos</span>
          </li>
        </ul>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button
            asChild
            size="lg"
            className="px-8 bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white border-0"
          >
            <a href="#registro">
              Empezar a Crear <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Tabs defaultValue="personal" className="w-full max-w-md" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 bg-zinc-800 p-1">
            <TabsTrigger
              value="personal"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
            >
              Personal
            </TabsTrigger>
            <TabsTrigger
              value="eventos"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white"
            >
              Eventos
            </TabsTrigger>
            <TabsTrigger
              value="marcas"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
            >
              Marcas
            </TabsTrigger>
          </TabsList>
          <TabsContent value="personal" className="mt-4">
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <div className="relative h-[150px] w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900 z-10" />
                <Image src="/placeholder.svg?height=150&width=400" alt="Quiz personal" fill className="object-cover" />
              </div>
              <CardContent className="p-6 space-y-4 relative">
                <div className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-3 w-fit mx-auto -mt-10 relative z-20 ring-4 ring-zinc-900">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center text-white">Quiz Personal</h3>
                <p className="text-zinc-400 text-center">
                  Creá un quiz sobre vos para ver cuánto te conocen tus amigos o sobre tus temas favoritos.
                </p>
                <div className="flex justify-center gap-2 mt-4">
                  <div className="flex items-center gap-1 text-xs text-zinc-500">
                    <Music className="h-3 w-3" /> Incluye sonidos
                  </div>
                  <div className="flex items-center gap-1 text-xs text-zinc-500">
                    <Video className="h-3 w-3" /> Formato para TikTok
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="eventos" className="mt-4">
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <div className="relative h-[150px] w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900 z-10" />
                <Image
                  src="/placeholder.svg?height=150&width=400"
                  alt="Quiz para eventos"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-4 relative">
                <div className="rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-3 w-fit mx-auto -mt-10 relative z-20 ring-4 ring-zinc-900">
                  <PenLine className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center text-white">Quiz para Eventos</h3>
                <p className="text-zinc-400 text-center">
                  Ideal para casamientos, cumpleaños o reuniones. ¡Sorprendé a tus invitados!
                </p>
                <div className="flex justify-center gap-2 mt-4">
                  <div className="flex items-center gap-1 text-xs text-zinc-500">
                    <Music className="h-3 w-3" /> Incluye sonidos
                  </div>
                  <div className="flex items-center gap-1 text-xs text-zinc-500">
                    <Video className="h-3 w-3" /> Formato para TikTok
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="marcas" className="mt-4">
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <div className="relative h-[150px] w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900 z-10" />
                <Image
                  src="/placeholder.svg?height=150&width=400"
                  alt="Quiz para marcas"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-4 relative">
                <div className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-3 w-fit mx-auto -mt-10 relative z-20 ring-4 ring-zinc-900">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center text-white">Quiz para Marcas</h3>
                <p className="text-zinc-400 text-center">
                  Generá engagement con tus clientes y captá leads con quizzes personalizados para tu marca.
                </p>
                <div className="flex justify-center gap-2 mt-4">
                  <div className="flex items-center gap-1 text-xs text-zinc-500">
                    <Music className="h-3 w-3" /> Incluye sonidos
                  </div>
                  <div className="flex items-center gap-1 text-xs text-zinc-500">
                    <Video className="h-3 w-3" /> Formato para TikTok
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

