export default function BlogCard() {
  return (
    <div className="flex h-4/5 w-1/5 justify-center border border-lightSand bg-whiteIce p-1 shadow-md">
      <div className="flex flex-col items-center justify-center space-y-6 border border-lightSand bg-whiteIce shadow-sm">
        <h1 className="font-prata text-xl text-darkBlack">
          Terra e Seres Humanos
        </h1>
        <span className="w-1/2 border border-lightSand"></span>
        <p className="p-4 text-center font-dosis text-lightBlack">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          esse aut ducimus libero reprehenderit ex officiis voluptas sint
          incidunt nisi, facere placeat adipisci, minus aliquam. Deleniti
          eligendi pariatur cumque maxime.
        </p>
        <button className="w-28 bg-darkSand p-3 font-dosis uppercase text-whiteIce shadow-md duration-500 ease-in-out hover:border hover:border-darkSand hover:bg-whiteIce hover:text-darkSand hover:shadow-lg">
          Ler Mais
        </button>
      </div>
    </div>
  )
}
