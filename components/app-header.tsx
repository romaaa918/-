import Link from "next/link"
import Image from "next/image"
import { Search, User, Menu, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AppHeaderProps {
  showBackButton?: boolean
  showMenu?: boolean
  title?: string
}

export default function AppHeader({ showBackButton = false, showMenu = false, title }: AppHeaderProps) {
  return (
    <header className="flex items-center justify-between p-2 bg-background">
      <div className="flex items-center gap-2">
        {showBackButton && (
          <Link href="/" className="flex items-center text-sm font-medium">
            <ArrowLeft size={18} className="mr-1" />
            Назад
          </Link>
        )}

        {showMenu && <Menu size={20} className="text-primary" />}

        {title && !showMenu && !showBackButton && <div className="text-sm font-medium">{title}</div>}
      </div>

      <div className="flex items-center">
        <div className="flex items-center">
          <Image
            src="/placeholder.svg?height=24&width=24"
            alt="InvSp Logo"
            width={24}
            height={24}
            className="rounded-full border-2 border-primary"
          />
          <span className="ml-1 font-semibold">InvSp</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Search size={18} />
        <Link href="/profile">
          <Button variant="ghost" size="icon" className="h-8 w-8 p-0 hover:bg-secondary/50 rounded-full">
            <User size={18} />
            <span className="sr-only">Профиль пользователя</span>
          </Button>
        </Link>
      </div>
    </header>
  )
}

