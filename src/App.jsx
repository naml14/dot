/* 'use client' */
import PropTypes from 'prop-types';
import { Image } from "visionary-image";
import { useState } from 'react'
import { Code, Cat, Guitar, PopsicleIcon as Pickle, BookOpen, Trees, Instagram, Youtube, Twitch, Github, Twitter, Music2, DiscIcon as Discord, InstagramIcon as Tiktok, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function App() {
  const [showGame, setShowGame] = useState(false)
  const [showModal, setShowModal] = useState(null)

  const socialLinks = [
    { icon: <Instagram className="h-6 w-6" />, label: 'Instagram', url: 'https://instagram.com/dager.32', color: 'hover:text-pink-500' },
    { icon: <Tiktok className="h-6 w-6" />, label: 'TikTok', url: 'https://tiktok.com/@elantrodedager', color: 'hover:text-black' },
    { icon: <Youtube className="h-6 w-6" />, label: 'DotDager', url: 'https://www.youtube.com/@DotDager', color: 'hover:text-red-500' },
    { icon: <Youtube className="h-6 w-6" />, label: 'Live clips', url: 'https://youtube.com/@DagerLive', color: 'hover:text-red-500' },
    { icon: <Discord className="h-6 w-6" />, label: 'Discord', url: 'https://discord.gg/4NFk6TamAB', color: 'hover:text-blue-700' },
    { icon: <Github className="h-6 w-6" />, label: 'GitHub', url: 'https://github.com/MarianoVilla', color: 'hover:text-gray-800' },
    { icon: <Music2 className="h-6 w-6" />, label: 'Music', url: 'https://youtube.com/c/DagerMusic', color: 'hover:text-red-500' },
    { icon: <Twitch className="h-6 w-6" />, label: 'Twitch', url: 'https://twitch.tv/dagerxiv', color: 'hover:text-purple-500' },
    { icon: <Twitter className="h-6 w-6" />, label: 'X/Twitter', url: 'https://twitter.com/Dager_32', color: 'hover:text-blue-400' },
    { icon: <Youtube className="h-6 w-6" />, label: 'El Antro de Dager', url: 'https://youtube.com/c/DagerXIV', color: 'hover:text-red-500' },
    { icon: <Linkedin className="h-6 w-6" />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/mariano-luis-villa/?locale=en_US', color: 'hover:text-blue-700' },
    { icon: <Music2 className="h-6 w-6" />, label: 'Spotify', url: 'https://open.spotify.com/intl-es/artist/6bkClBMJd4qKxJp0J5vHsz?si=mbfNHqvBT9SKSQ-ZNhXHJg&nd=1&dlsi=f5e06a9251cb4859', color: 'hover:text-green-500' }
  ]

  const passions = [
    { icon: <Code size={24} />, text: "Programación", image: "programacion.jpg", description: "Como creen que estoy todo el día la gente que no entiende un choto de programación." },
    { icon: <Cat size={24} />, text: "Gatos", image: "gatos.jpg", description: "Una gran compañía mientras debugueo código." },
    { icon: <Guitar size={24} />, text: "Guitarras", image: "https://pixabay.com/get/g7ddc31ee324d0c4c53914f05d0a5eadca91a0f312165c18380d9e6b25ca4cf85abf20cd71140f19325e9d44332d2e272a0410d65071c4edd65fa5b5ac02574de53c2637c152d1b8fd9df53cdcbbe6395_640.jpg", description: "Mi lado creativo, mirar los links no miento." },
    { icon: <Pickle size={24} />, text: "Pepino", image: "pepino1.webp", description: "¿En qué cree que se basa lo de contador serial de chistes de mierda?" },
    { icon: <BookOpen size={24} />, text: "Filosofía", image: "filosofia.jpg", description: "Leo luego existo, o como chota se diga." },
    { icon: <Trees size={24} />, text: "Lumberjack", onClick: () => setShowGame(true) },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-blue-200 flex flex-col items-center justify-center p-4">
      <main className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center mb-8">
          <Image
            src="https://yt3.googleusercontent.com/KPVok_m-JqxKG5wD7HaXc5RyYDPPHHZpQP4KquV8fD9er0mGEkZ_9UuQojBehXz6aCxUt0RI=s160-c-k-c0x00ffffff-no-rj"
            alt="Dot Dager"
            width={200}
            height={200}
            className="rounded-full mb-4 md:mb-0 md:mr-8"
          />
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Dot Dager</h1>
            <p className="text-xl text-gray-600 mb-2">Creador de contenido & Desarrollador</p>
            <p className="text-lg text-gray-600">Full-stack senior y contador serial de chistes de mierda.</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mis Pasiones</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {passions.map((passion, index) => (
              <InterestItem
                key={index}
                icon={passion.icon}
                text={passion.text}
                onClick={passion.onClick || (() => setShowModal(passion.text))}
              />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Encuéntrame en</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center p-3 bg-gray-100 rounded-lg transition-colors ${link.color} group`}
              >
                {link.icon}
                <span className="ml-2 text-sm hidden sm:inline">{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        {showGame && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Lumberjack Game</h3>
              <iframe
                src="https://html-classic.itch.zone/html/11530896/index.html"
                width="1000"
                height="800"
                className="border-0"
              ></iframe>
              <Button
                onClick={() => setShowGame(false)}
                variant="destructive"
                className="mt-4 w-full"
              >
                Cerrar
              </Button>
            </div>
          </div>
        )}

        {passions.map((passion, index) => (
          <Dialog key={index} open={showModal === passion.text} onOpenChange={() => setShowModal(null)}>
            <DialogContent className="sm:max-w-[625px]">
              <DialogHeader className="pb-1">
                <DialogTitle>{passion.text}</DialogTitle>
              </DialogHeader>
              <div className="relative h-[400px]">
                <Image
                  src={passion.image}
                  alt={passion.text}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <DialogDescription className="text-xl">
                {passion.description}
              </DialogDescription>
            </DialogContent>
          </Dialog>
        ))}
      </main>
      <footer className="mt-8 text-center text-gray-600">
        <p>&copy; 2024 Dot Dager. Todos los derechos reservados.</p>
        <p>Hecha por Ing. Andrés Mora <a href="https://github.com/naml14" alt="Github Ing. Andrés Mora" target='_blank'>Github</a></p>
      </footer>
    </div>
  )
}

function InterestItem({ icon, text, onClick }) {
  return (
    <div
      className="flex items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
      onClick={onClick}
    >
      {icon}
      <span className="ml-2">{text}</span>
    </div>
  )
}
InterestItem.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
