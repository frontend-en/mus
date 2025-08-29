import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Users, CheckCircle, TrendingUp, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from './LanguageProvider';

export function ProofDemo() {
  const { t } = useLanguage();
  const stats = [
    { icon: CheckCircle, labelKey: 'proofDemo.stats.tracksProtected', value: '2,847' },
    { icon: Users, labelKey: 'proofDemo.stats.happyArtists', value: '892' },
    { icon: TrendingUp, labelKey: 'proofDemo.stats.successRate', value: '99.8%' }
  ];

  const testimonials = [
    {
      nameKey: 'proofDemo.testimonial1.name',
      roleKey: 'proofDemo.testimonial1.role',
      contentKey: 'proofDemo.testimonial1.content',
      avatar: 'AR'
    },
    {
      nameKey: 'proofDemo.testimonial2.name',
      roleKey: 'proofDemo.testimonial2.role',
      contentKey: 'proofDemo.testimonial2.content',
      avatar: 'MC'
    },
    {
      nameKey: 'proofDemo.testimonial3.name',
      roleKey: 'proofDemo.testimonial3.role',
      contentKey: 'proofDemo.testimonial3.content',
      avatar: 'JB'
    }
  ];

  const verificationExample = {
    trackName: 'Digital Dreams',
    artist: 'CryptoBeats',
    hash: '0x7d865e959b2466918c9863afca942d0fb89d7c9ac0c99bafc3749504ded97730',
    timestamp: '2024-08-15 14:32:18 UTC',
    network: 'Ethereum Mainnet'
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('proofDemo.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('proofDemo.subtitle')}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.labelKey}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-purple-500 to-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{t(stat.labelKey)}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Blockchain Verification Demo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2 border-border shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground">{t('proofDemo.verification.title')}</h3>
                  <Badge className="bg-accent/10 text-accent-foreground border-accent/30">{t('proofDemo.verification.badge')}</Badge>
                </div>
                
                <div className="bg-muted rounded-lg p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('proofDemo.verification.track')}</span>
                    <span className="font-medium text-foreground">{verificationExample.trackName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('proofDemo.verification.artist')}</span>
                    <span className="font-medium text-foreground">{verificationExample.artist}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('proofDemo.verification.network')}</span>
                    <span className="font-medium text-primary">{verificationExample.network}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('proofDemo.verification.timestamp')}</span>
                    <span className="font-medium text-foreground">{verificationExample.timestamp}</span>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-4">
                  <div className="text-muted-foreground text-xs mb-2">{t('proofDemo.verification.transactionHash')}</div>
                  <div className="font-mono text-sm text-accent break-all">
                    {verificationExample.hash}
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-primary/30 text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="#" className="flex items-center justify-center space-x-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>{t('proofDemo.verification.viewEtherscan')}</span>
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Visual Demo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1643598778711-c118e8d6d71f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwY2VydGlmaWNhdGUlMjB2ZXJpZmljYXRpb258ZW58MXx8fHwxNzU2Mzg5NTI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Blockchain verification process"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-white font-semibold mb-2">{t('proofDemo.blockchain.title')}</h4>
                <p className="text-white/80 text-sm">
                  {t('proofDemo.blockchain.description')}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30"
              >
                <Play className="w-6 h-6 text-white ml-1" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">{t('proofDemo.testimonials.title')}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.nameKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-0 shadow-lg">
                  <CardContent className="p-6 space-y-4">
                    <p className="text-foreground italic">"{t(testimonial.contentKey)}"</p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-sm">{testimonial.avatar}</span>
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{t(testimonial.nameKey)}</div>
                        <div className="text-sm text-muted-foreground">{t(testimonial.roleKey)}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}