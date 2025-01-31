import { Award, Heart, Star } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-henna-50 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-4xl text-henna-800">Our Story</h2>
            <p className="text-lg text-henna-700 leading-relaxed">
              With over a decade of experience in the art of Mehandi, our journey has been one of passion, 
              dedication, and continuous evolution. Every design we create tells a unique story, 
              blending traditional patterns with contemporary aesthetics.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <Award className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                <p className="font-semibold text-henna-800">10+ Years</p>
                <p className="text-sm text-henna-600">Experience</p>
              </div>
              <div className="text-center">
                <Heart className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                <p className="font-semibold text-henna-800">500+</p>
                <p className="text-sm text-henna-600">Happy Brides</p>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                <p className="font-semibold text-henna-800">5 Star</p>
                <p className="text-sm text-henna-600">Rating</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -rotate-6 border-2 border-gold-500 rounded-lg"></div>
            <img 
              src="assets/profile.jpeg" 
              alt="Mehandi Artist at Work"
              className="rounded-lg relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}