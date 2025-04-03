import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Star, Sparkles, TrendingUp, Music, Video } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import QuizCard from "@/components/quiz-card"
import LeadCaptureForm from "@/components/lead-capture-form"
import CreateQuizSection from "@/components/create-quiz-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-40 w-full border-b border-zinc-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-pink-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">Q</span>
              </div>
              <span className="inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
                QuizzTok
              </span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#quizzes"
                className="flex items-center text-sm font-medium text-zinc-400 transition-colors hover:text-pink-500"
              >
                Quizzes
              </Link>
              <Link
                href="#crear"
                className="flex items-center text-sm font-medium text-zinc-400 transition-colors hover:text-pink-500"
              >
                Creá tu Quiz
              </Link>
              <Link
                href="#beneficios"
                className="flex items-center text-sm font-medium text-zinc-400 transition-colors hover:text-pink-500"
              >
                Por qué
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Button asChild variant="ghost" size="sm" className="hidden sm:flex text-white hover:bg-zinc-800">
                <Link href="#quizzes">Empezar</Link>
              </Button>
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white border-0"
              >
                <Link href="#registro">Registrate</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-black to-zinc-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-pink-500 blur-[100px]"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-cyan-500 blur-[100px]"></div>
            <div className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full bg-purple-500 blur-[100px]"></div>
          </div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1 text-sm font-medium text-pink-500 mb-4">
                    <Sparkles className="mr-1 h-3 w-3" /> Trending en Argentina
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                    Los quizzes más virales del momento
                  </h1>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">
                    Descubrí qué personaje de TikTok sos, compartí tus resultados y hacete viral con tus propios
                    quizzes. ¡Es el nuevo challenge!
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="px-8 bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white border-0"
                  >
                    <Link href="#quizzes">
                      Hacer un Quiz <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="px-8 border-pink-500/50 text-white hover:bg-pink-500/10"
                  >
                    <Link href="#crear">Creá tu Propio Quiz</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px]">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 blur-[60px] opacity-30"></div>
                  <Image
                    src="/placeholder.svg?height=450&width=450"
                    alt="Ilustración de Quiz"
                    fill
                    className="object-contain relative z-10"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quiz Selection */}
        <section id="quizzes" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-500 mb-4">
                  <TrendingUp className="mr-1 h-3 w-3" /> Top Quizzes
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
                  Quizzes que están rompiendo todo
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Los quizzes más compartidos en redes. ¡Hacelos, compartí tus resultados y etiquetá a tus amigos!
                </p>
              </div>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:gap-8 mt-8">
              <QuizCard
                title="¿Qué trend de TikTok argentino sos?"
                description="¿Sos un Coscu Army, un baile de Emilia Mernes o un challenge de La Joaqui? Descubrilo ahora."
                image="/placeholder.svg?height=250&width=350"
                category="Trends"
                questions={10}
                gradient="from-pink-500 to-red-500"
                icon="video"
              />
              <QuizCard
                title="¿Qué influencer argentino serías?"
                description="Descubrí si sos más como Lit Killah, María Becerra, Duki o La China Suárez."
                image="/placeholder.svg?height=250&width=350"
                category="Influencers"
                questions={12}
                gradient="from-purple-500 to-blue-500"
                icon="users"
              />
              <QuizCard
                title="¿Qué comida de moda en TikTok sos?"
                description="¿Sos un fernet con coca, un choripán gourmet o un mate aesthetic? Tu personalidad tiene su equivalente foodie."
                image="/placeholder.svg?height=250&width=350"
                category="FoodTok"
                questions={8}
                gradient="from-yellow-500 to-orange-500"
                icon="utensils"
              />
            </div>
          </div>
        </section>

        {/* Create Your Own Quiz Section */}
        <section id="crear" className="w-full py-12 md:py-24 lg:py-32 bg-black relative">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-pink-500 blur-[100px]"></div>
            <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-cyan-500 blur-[100px]"></div>
          </div>
          <div className="container px-4 md:px-6 relative">
            <CreateQuizSection />
          </div>
        </section>

        {/* Lead Capture Form */}
        <section id="registro" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1 text-sm font-medium text-pink-500 mb-4">
                    <Sparkles className="mr-1 h-3 w-3" /> Exclusivo
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
                    Unite al team QuizzTok
                  </h2>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Registrate para acceder a quizzes exclusivos, crear los tuyos propios y compartirlos con tus
                    seguidores.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-pink-500" />
                    <span className="text-zinc-300">Resultados personalizados con tu foto</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-pink-500" />
                    <span className="text-zinc-300">Compartí directo a TikTok, Insta y WhatsApp</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-pink-500" />
                    <span className="text-zinc-300">Creá quizzes que se vuelvan virales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-pink-500" />
                    <span className="text-zinc-300">Estadísticas de quién hace tus quizzes</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <LeadCaptureForm />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="beneficios" className="w-full py-12 md:py-24 lg:py-32 bg-black relative">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-purple-500 blur-[100px]"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-pink-500 blur-[100px]"></div>
          </div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-500 mb-4">
                  <Star className="mr-1 h-3 w-3" /> Beneficios
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
                  ¿Por qué QuizzTok es furor?
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubrí por qué todos están compartiendo nuestros quizzes en sus redes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-8">
              <Card className="flex flex-col items-center text-center p-2 bg-zinc-900 border-zinc-800 hover:border-pink-500/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="mb-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-3 w-fit mx-auto">
                    <Video className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Contenido Viral</h3>
                  <p className="text-zinc-400 mt-2">
                    Nuestros quizzes están diseñados para ser compartidos y generar reacciones. Ideal para creadores de
                    contenido.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-2 bg-zinc-900 border-zinc-800 hover:border-pink-500/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="mb-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-3 w-fit mx-auto">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Siempre Trending</h3>
                  <p className="text-zinc-400 mt-2">
                    Actualizamos nuestros quizzes según las últimas tendencias de TikTok y la cultura argentina.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-2 bg-zinc-900 border-zinc-800 hover:border-pink-500/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-3 w-fit mx-auto">
                    <Music className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Resultados con Música</h3>
                  <p className="text-zinc-400 mt-2">
                    Cada resultado viene con su soundtrack ideal para usar en tus videos de reacción.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-2 bg-zinc-900 border-zinc-800 hover:border-pink-500/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="mb-4 rounded-full bg-gradient-to-r from-pink-500 to-red-500 p-3 w-fit mx-auto">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Estética Argentina</h3>
                  <p className="text-zinc-400 mt-2">
                    Referencias 100% argentinas con el lenguaje y la cultura que usamos en nuestras redes.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-2 bg-zinc-900 border-zinc-800 hover:border-pink-500/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="mb-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 p-3 w-fit mx-auto">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Comunidad</h3>
                  <p className="text-zinc-400 mt-2">
                    Unite a miles de creadores argentinos que ya están usando QuizzTok para conectar con su audiencia.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-2 bg-zinc-900 border-zinc-800 hover:border-pink-500/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="mb-4 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 p-3 w-fit mx-auto">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Personalización Total</h3>
                  <p className="text-zinc-400 mt-2">
                    Creá quizzes con tu estética, tus sonidos y tu personalidad para destacar en las redes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1 text-sm font-medium text-pink-500 mb-4">
                  <Star className="mr-1 h-3 w-3" /> Reviews
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
                  La comunidad habla
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Mirá lo que dicen los creadores que ya están usando QuizzTok.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="p-6 bg-zinc-900 border-zinc-800 hover:border-pink-500/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Avatar de usuario"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">@mati.content</h3>
                    <p className="text-sm text-zinc-400">100K seguidores</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-zinc-400">
                    "Hice un quiz de '¿Qué barrio porteño sos?' y explotó. 500K de views y gané como 10K de seguidores
                    nuevos. Gracias QuizzTok 🔥"
                  </p>
                </div>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-pink-500 text-pink-500" />
                  ))}
                </div>
              </Card>
              <Card className="p-6 bg-zinc-900 border-zinc-800 hover:border-pink-500/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Avatar de usuario"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">@caro.tiktoker</h3>
                    <p className="text-sm text-zinc-400">250K seguidores</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-zinc-400">
                    "Creé un quiz para mi cumple y hasta Lit Killah lo hizo en un live! La herramienta es súper fácil y
                    los resultados quedan re aesthetic ✨"
                  </p>
                </div>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-pink-500 text-pink-500" />
                  ))}
                </div>
              </Card>
              <Card className="p-6 bg-zinc-900 border-zinc-800 hover:border-pink-500/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Avatar de usuario"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">@lucho.viral</h3>
                    <p className="text-sm text-zinc-400">50K seguidores</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-zinc-400">
                    "El quiz de 'Qué canción de trap argentino sos' me dijo que soy un tema de Duki y mis seguidores
                    estallaron. Lo mejor para generar engagement 💯"
                  </p>
                </div>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-pink-500 text-pink-500" />
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-pink-500 to-cyan-500 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white blur-[100px]"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white blur-[100px]"></div>
          </div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  ¿Listo para ser viral?
                </h2>
                <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Unite a la comunidad de creadores que ya están arrasando con sus quizzes.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" variant="secondary" className="px-8 bg-white text-pink-500 hover:bg-white/90">
                  <Link href="#quizzes">Hacer un Quiz Ahora</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="px-8 bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Link href="#crear">Creá tu Propio Quiz</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-zinc-800 bg-black py-6 md:py-12">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-pink-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">Q</span>
              </div>
              <span className="inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
                QuizzTok
              </span>
            </Link>
            <p className="text-center text-sm text-zinc-500 md:text-left">
              &copy; {new Date().getFullYear()} QuizzTok. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="#"
              className="rounded-full border border-zinc-800 p-2 text-zinc-400 hover:text-pink-500 hover:border-pink-500/50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="rounded-full border border-zinc-800 p-2 text-zinc-400 hover:text-pink-500 hover:border-pink-500/50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="rounded-full border border-zinc-800 p-2 text-zinc-400 hover:text-pink-500 hover:border-pink-500/50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="rounded-full border border-zinc-800 p-2 text-zinc-400 hover:text-pink-500 hover:border-pink-500/50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="#"
              className="rounded-full border border-zinc-800 p-2 text-zinc-400 hover:text-pink-500 hover:border-pink-500/50 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M9.5 17H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.5" />
                <path d="M12 15l-3 3 3 3" />
              </svg>
              <span className="sr-only">TikTok</span>
            </Link>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs text-zinc-400 hover:text-pink-500 hover:underline underline-offset-4">
              Términos de Servicio
            </Link>
            <Link href="#" className="text-xs text-zinc-400 hover:text-pink-500 hover:underline underline-offset-4">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-xs text-zinc-400 hover:text-pink-500 hover:underline underline-offset-4">
              Contactanos
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

