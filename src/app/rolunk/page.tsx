import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Phone, Mail } from 'lucide-react'
import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'Rólunk',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

const people = [
  {
    section: 'Elnökség',
    name: 'Tallósy Áron',
    role: 'Elnök',
    imageUrl:
      'https://res.cloudinary.com/dqi8dotxx/image/upload/Images_of_Officials_1398_m5jhwo.jpg',
    bio: 'Tallósy Áron vagyok, az Eötvös József Gimnázium tanulója és a Fővárosi Diákönkormányzat elnöke. Mindig is kivettem a szerepem a diákok életének a fejlesztésében, legyen az különféle ENSZ és Európai Unió diákkonferenciákon keresztül, ezt próbálom folytatni jelenleg az FDÖ-vel. Legfőbb célom, hogy a Fővárosi Diákönkormányzatnak kiépítsük az alapjait, növeljük az elérését és még jobban képviseljük a budapesti diákokat.',
    email: 'tallosy.aron@gmail.com',
    phone: '+36203907319',
  },
  {
    name: 'Cserni Milán',
    role: 'Alelnök',
    imageUrl:
      'https://res.cloudinary.com/dqi8dotxx/image/upload/v1748422301/IMG_0625_wwj4eh.jpg',
    bio: 'Cserni Milán vagyok, az Eötvös József Gimnázium tanulója és a Fővárosi Diákönkormányzat alelnöke. Amióta lehetőségem nyílt rá, osztályképviselőként mindig is aktívan részt vettem a diákság érdekképviseletében. Hiszem, hogy az elkövetkező évben olyan erős alapokat tudunk lefektetni, amelyek lehetővé teszik az FDÖ számára, hogy a jövőben a lehető hatékonyabban képviselje a diákságot.',
    email: 'csernimm@gmail.com',
    phone: '+36203424996',
  },
  {
    name: 'Tóth-Maros Ádám',
    role: 'Alelnök',
    imageUrl: '', // TODO: add image URL
    bio: 'Tóth-Maros Ádám vagyok, a Budapesti Fazekas Mihály Gimnázium tanulója és a Fővárosi Diákönkormányzat alelnöke. A második ciklusomat töltöm az FDÖ-ben, első ciklusom alatt kormánytag voltam. Az én kezem alatt indult el a Mentálhigiénés Javaslatcsomag projektje, ami jelenleg is aktívan fut. Szívügyemnek tartom a diákok jólétét, mindennapos mosolygását, és célom, hogy tanulmányaim végéig a diákokért dolgozzam.',
    divider: true,
    email: '', // TODO: add email
    phone: '', // TODO: add phone number
  },

  // -------- újonnan hozzáadott tagok --------

  {
    section: 'Kormánytagok',
    name: 'Nkanyimuo Bruno',
    role: 'Kormánytag',
    imageUrl:
      'https://res.cloudinary.com/dqi8dotxx/image/upload/Government_Officials_Images_xmczel.jpg', // TODO: add image URL
    bio: 'Nkanyimuo Bruno vagyok, a Maimonidész Gimnázium Diákönkormányzatának elnöke. A budapesti diákok helyzete régóta foglalkoztat, de a mostani tanévben határoztam el igazán, hogy tenni is akarok az ügyeinkért. Hiszem, hogy a diákoknak már fiatalon politikailag tájékozottnak és a tiszta demokráciára igényesnek kell lenniük, és ezt a célt szeretném szolgálni.',
  },
  {
    name: 'Bagyinszki Luca',
    role: '',
    imageUrl: '', // TODO: add image URL
    bio: 'Bagyinszki Luca vagyok, a Madách Imre Gimnázium egyik diákpolgármestere. Szenvedélyem a szervezés, feladatom a kormány segítése és támogatása. Célom a budapesti diákközösség építése valamint az iskolák közötti kapcsolatok kiterjesztése és fejlesztése.',
  },
  {
    name: 'Nyíri Botond',
    role: 'Social media',
    imageUrl: '', // TODO: add image URL
    bio: 'Nyíri Botond vagyok a Corvin Mátyás Gimnázium tanulója, és iskolám DÖK-társelnöke. Feladataim közé tartozik a social-media oldalak felügyelete és elérésünk bővítése. Célom, hogy az FDÖ céljait, eredményeit és terveit minél több emberhez el tudjam juttatni.',
  },
  {
    name: 'Bánfi Boglárka',
    role: '',
    imageUrl: '', // TODO: add image URL
    bio: '',
  },
  {
    name: 'Chen Wenda',
    role: 'Pénzügyes',
    imageUrl: '', // TODO: add image URL
    bio: 'Chen Wenda vagyok, a Szent István Gimnázium diákönkormányzatának alelnöke. Mindig is érdeklődtem a pénzügyek iránt, ezért vállaltam szerepet az FDÖ egyesület létrehozásában és az adománygyűjtés megszervezésében. Célom, hogy a beérkező támogatásokból minél több programot és eseményt szervezzünk a budapesti diákság számára!',
  },
  {
    name: 'Kappéter Benedek',
    role: '',
    imageUrl: '', // TODO: add image URL
    bio: 'Kappéter Benedek vagyok, a Szilágyi Erzsébet Gimnázium tanulója, az FDÖ kormánytagja. Feladatom egy iskolai DÖK-keretrendszer létrehozása, valamint szeretném segíteni az FDÖ “növekedését”. Célom, hogy az e ciklus alatt történő együttműködések lefektessék a jövőbeni FDÖ alapjait.',
  },
  {
    name: 'Fuzik Zoárd',
    role: '',
    imageUrl: '', // TODO: add image URL
    bio: '',
  },
  {
    name: 'Hejar Korkut',
    role: '',
    imageUrl: '', // TODO: add image URL
    bio: '',
  },
  {
    name: 'Kiss Dániel',
    role: '',
    imageUrl: '', // TODO: add image URL
    bio: '',
  },
  {
    name: 'Tomka-Babucs Panna',
    role: 'Választási bizottság elnöke',
    imageUrl: '', // TODO: add image URL
    bio: 'Tomka-Babucs Panna vagyok a Választási bizottság elnöke, és a Kodály Zoltán Ének-zenei Általános Iskola, Gimnázium és Zenei Alapfokú Művészeti Iskola diákelnöke is. Hiszek abban, hogy dinamikus együttműködéssel képesek leszünk javítani a magyar oktatási rendszeren.',
  },
  {
    name: 'Szentpéteri Nelli',
    role: 'Social media',
    imageUrl: '', // TODO: add image URL
    bio: 'Szentpéteri Kornélia vagyok, a Xántus János Két Tanítási Nyelvű Gimnázium diákönkormányzatának alelnöke. Én vagyok felelős a közösségi oldalak igazgatásáért, és az online kapcsolattartó szerepért. A célom, hogy minden platformon el tudjatok érni minket.',
  },

  // More people...
]

export default function About() {
  return (
    <SimpleLayout
      title="Rólunk"
      intro="We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients."
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-1 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {people.map((person) => (
            <>
              {person.section && (
                <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  {person.section}
                </h2>
              )}
              <li key={person.name} className="flex flex-col gap-4 xl:flex-row">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="aspect-4/5 w-52 flex-none rounded-2xl object-cover max-sm:mx-auto"
                />
                <div className="flex-auto">
                  <h3 className="text-lg/8 font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                    {person.name}
                  </h3>
                  <p className="text-base/7 text-red-500">{person.role}</p>
                  <p className="mt-4 text-base/7 text-zinc-600 dark:text-zinc-400">
                    {person.bio}
                  </p>
                  <ul className="mt-6 flex gap-x-6">
                    {person.email && (
                      <li>
                        <a
                          href={`mailto:${person.email}`}
                          className="flex items-center gap-2"
                        >
                          <Mail
                            size={24}
                            className="text-red-500 hover:text-red-600"
                          />
                          <span className="block text-zinc-700 hover:text-zinc-900 max-sm:hidden dark:text-zinc-300 dark:hover:text-zinc-100">
                            {person.email}
                          </span>
                        </a>
                      </li>
                    )}
                    {person.phone && (
                      <li>
                        <a
                          href={`tel:${person.phone}`}
                          className="flex items-center gap-2"
                        >
                          <Phone size={24} className="text-red-500" />
                          <span className="block text-zinc-700 hover:text-zinc-900 max-sm:hidden dark:text-zinc-300 dark:hover:text-zinc-100">
                            {person.phone}
                          </span>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </li>
              {person.divider && (
                <hr className="my-0 border-zinc-200 dark:border-zinc-700" />
              )}
            </>
          ))}
        </ul>
      </div>
    </SimpleLayout>
  )
}
