"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"

// Данные категорий
const categories = [
  { id: 1, name: "Хоккей с шайбой", image: "/placeholder.svg?height=40&width=40" },
  { id: 2, name: "Настольный теннис", image: "/placeholder.svg?height=40&width=40" },
  { id: 3, name: "Футбол", image: "/placeholder.svg?height=40&width=40" },
  { id: 4, name: "Баскетбол", image: "/placeholder.svg?height=40&width=40" },
  { id: 5, name: "Волейбол", image: "/placeholder.svg?height=40&width=40" },
  { id: 6, name: "Большой теннис", image: "/placeholder.svg?height=40&width=40" },
  { id: 7, name: "Велоспорт", image: "/placeholder.svg?height=40&width=40" },
  { id: 8, name: "Скейтбординг", image: "/placeholder.svg?height=40&width=40" },
]

export default function CategoriesMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      {/* Кнопка категорий */}
      <Button
        onClick={toggleMenu}
        className="bg-primary text-white py-2 px-4 w-full rounded-full flex items-center justify-center gap-2"
      >
        <span>Категории</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </Button>

      {/* Выпадающее меню */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-20 max-h-[70vh] overflow-y-auto">
          <div className="p-2 flex justify-between items-center border-b">
            <h3 className="font-medium">Виды спорта</h3>
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="h-8 w-8">
              <X size={16} />
            </Button>
          </div>

          <div className="p-2">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.id}`}
                className="flex items-center gap-3 p-2 hover:bg-background rounded-md transition-colors"
                onClick={toggleMenu}
              >
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={40}
                  height={40}
                  className="rounded-md"
                />
                <span className="text-sm">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Затемнение фона при открытом меню */}
      {isOpen && <div className="fixed inset-0 bg-black/20 z-10" onClick={toggleMenu} aria-hidden="true" />}
    </div>
  )
}

