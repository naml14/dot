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
    { icon: <Discord className="h-6 w-6" />, label: 'Discord', url: 'https://discord.gg/4NFk6TamAB', color: 'hover:text-indigo-500' },
    { icon: <Github className="h-6 w-6" />, label: 'GitHub', url: 'https://github.com/MarianoVilla', color: 'hover:text-gray-800' },
    { icon: <Music2 className="h-6 w-6" />, label: 'Music', url: 'https://youtube.com/c/DagerMusic', color: 'hover:text-red-500' },
    { icon: <Twitch className="h-6 w-6" />, label: 'Twitch', url: 'https://twitch.tv/dagerxiv', color: 'hover:text-purple-500' },
    { icon: <Twitter className="h-6 w-6" />, label: 'X/Twitter', url: 'https://twitter.com/Dager_32', color: 'hover:text-blue-400' },
    { icon: <Youtube className="h-6 w-6" />, label: 'El Antro de Dager', url: 'https://youtube.com/c/DagerXIV', color: 'hover:text-red-500' },
    { icon: <Linkedin className="h-6 w-6" />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/mariano-luis-villa/?locale=en_US', color: 'hover:text-blue-700' },
    { icon: <Music2 className="h-6 w-6" />, label: 'Spotify', url: 'https://open.spotify.com/intl-es/artist/6bkClBMJd4qKxJp0J5vHsz?si=mbfNHqvBT9SKSQ-ZNhXHJg&nd=1&dlsi=f5e06a9251cb4859', color: 'hover:text-green-500' }
  ]

  const passions = [
    { icon: <Code size={24} />, text: "Programación", image: "https://pixabay.com/get/geddcd88bf0cc30d4f5ee6c66e26151ed02967ba1e7ff571b883534c846cc3c9a7db4a652a270da5e4b5a3b4bde68589ae69fbb8039d2883a412f0677df4b13d32711ba4cc1b3b9a221ede5f3df9c8d16_640.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { icon: <Cat size={24} />, text: "Gatos", image: "https://pixabay.com/get/g51067dd7599878d21ec2d07b1b57e85352ac3a2bf36f437722c8544b14137fbcf1211cd4c73e7dbb65ee15379970b9411d1a756e314ce1bac6b2d552fef57cdb4046b2c3bdfbff0d26d6e833c3f7dd68_640.jpg", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { icon: <Guitar size={24} />, text: "Guitarras", image: "https://pixabay.com/get/g7ddc31ee324d0c4c53914f05d0a5eadca91a0f312165c18380d9e6b25ca4cf85abf20cd71140f19325e9d44332d2e272a0410d65071c4edd65fa5b5ac02574de53c2637c152d1b8fd9df53cdcbbe6395_640.jpg", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { icon: <Pickle size={24} />, text: "Pepinillos", image: "public/pepino1.webp", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { icon: <BookOpen size={24} />, text: "Filosofía", image: "https://pixabay.com/get/g910af91e56be3c6456b211fbc37ab301ca81368d9b45efde9d866663eff1f5d8b5048a15fe0fab360b94092d39e3b3f7b4ee783fc50b0d2ae73730d4c449261373b1f01067108d9e611c94fdb487c6a5_640.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
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
              <DialogDescription>
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
