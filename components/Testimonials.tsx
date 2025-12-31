'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const reviews = [
  {
    content:
      "Mrs. Batool always welcomes our son with a smile and hug. He comes home excited with worksheets that work on letters, counting, and tactile skills. He’s made many friends and is always eager to play when he arrives.",
    author: 'Sarah G.',
    initials: 'SG',
  },
  {
    content:
      "We’ve been very happy with our experience at Mill Creek Child Care. Batool and her team are warm, caring, and very patient with the kids.",
    author: 'Lucia Miranda Reyes',
    initials: 'LR',
  },
  {
    content:
      "My son has been going to Ms. B’s daycare since he was 5 months old. My experience has been nothing short of amazing.",
    author: 'Sakshi Jhawar',
    initials: 'SJ',
  },
  {
    content:
      "Mrs. B made us feel our daughter was loved and well taken care of. After three years, she still asks to go back.",
    author: 'Salesca Rodriguez',
    initials: 'SR',
  },
  {
    content:
      "She is affectionate, kind, and attentive. My daughter loves her and asks to go every day.",
    author: 'Yeldys Leiva Saenz',
    initials: 'YS',
  },
  {
    content: 'Highly recommend their services.',
    author: 'Elahe Tanhaei',
    initials: 'ET',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(3)

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 768) {
        setVisible(1)
      } else if (window.innerWidth < 1024) {
        setVisible(2)
      } else {
        setVisible(3)
      }
    }

    updateVisible()
    window.addEventListener('resize', updateVisible)
    return () => window.removeEventListener('resize', updateVisible)
  }, [])

  // Reset index when visible count changes to prevent out-of-bounds
  useEffect(() => {
    setIndex(0)
  }, [visible])

  const maxIndex = reviews.length - visible

  const next = () => setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  const prev = () => setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))

  return (
    <section className="bg-gradient-to-br from-primary to-navy py-24">
      <div className="container-custom">

        {/* HEADER */}
        <div className="section-header light">
          <h2>What Parents Say</h2>
          <p>A testament to the love and trust we have built over the years</p>
        </div>

        {/* CAROUSEL WRAPPER */}
        <div className="relative max-w-6xl mx-auto overflow-hidden">

          {/* LEFT ARROW */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-navy rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
            aria-label="Previous"
          >
            ‹
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-navy rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
            aria-label="Next"
          >
            ›
          </button>

          {/* SLIDER */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / visible)}%)`,
            }}
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
              >
                <Card className="border-0 shadow-soft rounded-2xl h-full">
                  <CardContent className="p-8 flex flex-col h-full">
                    <p className="text-navy/80 italic leading-relaxed mb-6">
                      “{review.content}”
                    </p>

                    <div className="mt-auto flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-secondary text-white font-bold">
                          {review.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <strong className="text-navy block">
                          {review.author}
                        </strong>
                        <span className="text-navy/60 text-sm">
                          Google Review
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
