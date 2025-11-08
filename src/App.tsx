import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Rocket, Zap, Shield, Users } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Rocket className="w-6 h-6 text-blue-600" />
              <span>LaunchPad</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Fitur</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">Tentang</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Kontak</a>
            </div>
            <Button>Mulai Sekarang</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl mb-6">
                Solusi Digital untuk Bisnis Modern
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Tingkatkan produktivitas dan efisiensi bisnis Anda dengan platform kami yang mudah digunakan dan powerful.
              </p>
              <div className="flex gap-4">
                <Button size="lg">Coba Gratis</Button>
                <Button variant="outline" size="lg">Pelajari Lebih Lanjut</Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
                alt="Modern workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Fitur Unggulan</h2>
            <p className="text-xl text-gray-600">
              Semua yang Anda butuhkan untuk mengembangkan bisnis
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl mb-4">Cepat & Efisien</h3>
              <p className="text-gray-600">
                Performa tinggi yang memastikan bisnis Anda berjalan lancar tanpa hambatan.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl mb-4">Aman & Terpercaya</h3>
              <p className="text-gray-600">
                Keamanan data Anda adalah prioritas utama kami dengan enkripsi tingkat enterprise.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl mb-4">Kolaborasi Tim</h3>
              <p className="text-gray-600">
                Bekerja bersama tim dengan mudah dan tingkatkan produktivitas secara kolektif.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6">
            Siap Memulai Perjalanan Anda?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Bergabunglah dengan ribuan bisnis yang telah mempercayai platform kami.
          </p>
          <Button size="lg" variant="secondary">
            Mulai Gratis Hari Ini
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Rocket className="w-6 h-6 text-blue-500" />
                <span className="text-white">LaunchPad</span>
              </div>
              <p className="text-sm">
                Solusi digital terpercaya untuk bisnis modern.
              </p>
            </div>
            <div>
              <h4 className="text-white mb-4">Produk</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Fitur</a></li>
                <li><a href="#" className="hover:text-white">Harga</a></li>
                <li><a href="#" className="hover:text-white">Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Karir</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Dukungan</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Bantuan</a></li>
                <li><a href="#" className="hover:text-white">Dokumentasi</a></li>
                <li><a href="#" className="hover:text-white">Kontak</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>&copy; 2025 LaunchPad. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
