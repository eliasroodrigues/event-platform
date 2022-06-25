import { FileArrowDown, CaretRight } from 'phosphor-react';

import { Button } from './Button';

export function Video() {
  return (
    <div className="flex-1">
      <div className="bg-black">
        <div className="h-full w-full max-w-[1100px] mah-h-[60vh] aspect-video">
          Video
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16 ">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              Aula 01 - Abertura do Ignite Lab
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod pariatur officia blanditiis earum eius quas temporibus saepe eaque consequuntur iste nihil doloribus, eum mollitia, ipsum ex a laudantium optio autem.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src="https://github.com/eliasroodrigues.png"
                alt="foto do professor"
              />

              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">Elias Rodrigues</strong>
                <span className="text-gray-200 text-sm block">Computer Science student</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Button variant='comunidade' />

            <Button variant='desafio' />
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2">
          <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>

            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">
                Material complementar
              </strong>

              <p className="text-sm text-gray-200 mt-6">
                Acesse o meterial complementar.
              </p>
            </div>

            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>

          <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>

            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">
                Wallpapers exclusívos
              </strong>

              <p className="text-sm text-gray-200 mt-6">
                Adiquira os wallpapers exclusívos.
              </p>
            </div>

            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}