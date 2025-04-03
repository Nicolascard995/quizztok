"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Lock, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function LeadCaptureForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // In a real app, you would send this data to your backend
      console.log("Form submitted:", { name, username, email })
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto bg-zinc-900 border-zinc-800">
        <CardHeader>
          <div className="mx-auto bg-gradient-to-r from-pink-500 to-cyan-500 p-3 rounded-full mb-4">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-center text-2xl text-white">¡Listo para arrasar!</CardTitle>
          <CardDescription className="text-center text-zinc-400">
            Te enviamos un correo de confirmación a <strong className="text-pink-500">{email}</strong>. Revisá tu
            bandeja de entrada para completar tu registro.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center pb-6">
          <div className="rounded-full bg-gradient-to-r from-pink-500/20 to-cyan-500/20 p-6">
            <Mail className="h-12 w-12 text-pink-500" />
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-zinc-900 border-zinc-800">
      <CardHeader>
        <CardTitle className="text-white">Registrate Gratis</CardTitle>
        <CardDescription className="text-zinc-400">
          Creá tu cuenta para acceder a todos los quizzes y crear los tuyos propios.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-zinc-300">
                Nombre
              </Label>
              <Input
                id="name"
                placeholder="Tu nombre completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="username" className="text-zinc-300">
                Usuario
              </Label>
              <div className="flex">
                <div className="bg-zinc-800 border-r-0 border-zinc-700 rounded-l-md flex items-center px-3 text-zinc-500">
                  @
                </div>
                <Input
                  id="username"
                  placeholder="tu.usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="bg-zinc-800 border-zinc-700 rounded-l-none text-white placeholder:text-zinc-500"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-zinc-300">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
              />
            </div>
            <div className="flex items-center space-x-2 pt-2">
              <Checkbox
                id="terms"
                required
                className="border-zinc-700 data-[state=checked]:bg-pink-500 data-[state=checked]:border-pink-500"
              />
              <Label htmlFor="terms" className="text-sm text-zinc-400">
                Acepto los{" "}
                <a href="#" className="text-pink-500 underline underline-offset-2">
                  Términos de Servicio
                </a>{" "}
                y la{" "}
                <a href="#" className="text-pink-500 underline underline-offset-2">
                  Política de Privacidad
                </a>
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="marketing"
                className="border-zinc-700 data-[state=checked]:bg-pink-500 data-[state=checked]:border-pink-500"
              />
              <Label htmlFor="marketing" className="text-sm text-zinc-400">
                Quiero recibir notificaciones sobre nuevos quizzes y tendencias
              </Label>
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white border-0"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Registrando..." : "Crear mi cuenta"}
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4 border-t border-zinc-800 pt-6">
        <div className="flex items-center justify-center space-x-2 text-sm text-zinc-500">
          <Lock className="h-4 w-4" />
          <span>Tu información está segura y nunca será compartida</span>
        </div>
      </CardFooter>
    </Card>
  )
}

