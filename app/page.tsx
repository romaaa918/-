import Image from "next/image"
import AppHeader from "@/components/app-header"
import CategoriesMenu from "@/components/categories-menu"

export default function CategoriesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="sticky top-0 z-10">
        <div className="text-xs text-center py-1">9:30</div>
        <AppHeader title="Категории" showMenu={true} />
        <div className="px-4 py-2">
          <CategoriesMenu />
        </div>
      </div>

      <main className="flex-1 p-2">
        <div className="grid grid-cols-2 gap-2">
          {/* Football */}
          <div className="bg-white rounded-lg p-2 flex flex-col">
            <Image
              src="/placeholder.svg?height=120&width=120"
              alt="Футбол"
              width={120}
              height={120}
              className="object-contain mx-auto"
            />
            <div className="text-xs font-bold mt-1">Футбол, 1000р.</div>
            <div className="text-xs text-gray-500">Футбол</div>
          </div>

          {/* Hockey stick */}
          <div className="bg-white rounded-lg p-2 flex flex-col">
            <Image
              src="/placeholder.svg?height=120&width=120"
              alt="Клюшка"
              width={120}
              height={120}
              className="object-contain mx-auto"
            />
            <div className="text-xs font-bold mt-1">Клюшка, 1500р.</div>
            <div className="text-xs text-gray-500">Хоккей с шайбой</div>
          </div>

          {/* Table tennis racket */}
          <div className="bg-white rounded-lg p-2 flex flex-col">
            <Image
              src="/placeholder.svg?height=120&width=120"
              alt="Ракетка"
              width={120}
              height={120}
              className="object-contain mx-auto"
            />
            <div className="text-xs font-bold mt-1">Ракетка, 500р.</div>
            <div className="text-xs text-gray-500">Настольный теннис</div>
          </div>

          {/* Skates */}
          <div className="bg-white rounded-lg p-2 flex flex-col">
            <Image
              src="/placeholder.svg?height=120&width=120"
              alt="Коньки"
              width={120}
              height={120}
              className="object-contain mx-auto"
            />
            <div className="text-xs font-bold mt-1">Коньки, 2000р.</div>
            <div className="text-xs text-gray-500">Фигурное катание</div>
          </div>

          {/* Skateboard */}
          <div className="bg-white rounded-lg p-2 flex flex-col">
            <Image
              src="/placeholder.svg?height=120&width=120"
              alt="Скейтборд"
              width={120}
              height={120}
              className="object-contain mx-auto"
            />
            <div className="text-xs font-bold mt-1">Скейтборд, 1000р.</div>
            <div className="text-xs text-gray-500">Скейтбординг</div>
          </div>

          {/* Tennis racket */}
          <div className="bg-white rounded-lg p-2 flex flex-col">
            <Image
              src="/placeholder.svg?height=120&width=120"
              alt="Ракетка"
              width={120}
              height={120}
              className="object-contain mx-auto"
            />
            <div className="text-xs font-bold mt-1">Ракетка, 1500р.</div>
            <div className="text-xs text-gray-500">Большой теннис</div>
          </div>

          {/* Bicycle */}
          <div className="bg-white rounded-lg p-2 flex flex-col">
            <Image
              src="/placeholder.svg?height=120&width=120"
              alt="Велосипед"
              width={120}
              height={120}
              className="object-contain mx-auto"
            />
            <div className="text-xs font-bold mt-1">Велосипед, 5000р.</div>
            <div className="text-xs text-gray-500">Велоспорт</div>
          </div>

          {/* Protection */}
          <div className="bg-white rounded-lg p-2 flex flex-col">
            <Image
              src="/placeholder.svg?height=120&width=120"
              alt="Защита"
              width={120}
              height={120}
              className="object-contain mx-auto"
            />
            <div className="text-xs font-bold mt-1">Защита, 500р.</div>
            <div className="text-xs text-gray-500">Скейтбординг</div>
          </div>
        </div>
      </main>

      <footer className="mt-auto border-t border-border">
        <div className="flex justify-around py-2">
          <div className="flex flex-col items-center">
            <div className="h-1 w-8 bg-primary rounded-full"></div>
          </div>
        </div>
      </footer>
    </div>
  )
}

