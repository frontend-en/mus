import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Mail, Phone, MessageSquare, Send, CheckCircle, Bitcoin } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageProvider';

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    tracks: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: Mail,
      titleKey: 'contact.emailSupport',
      valueKey: 'contact.emailValue',
      descriptionKey: 'contact.emailDescription'
    },
    {
      icon: MessageSquare,
      titleKey: 'contact.liveChat',
      valueKey: 'contact.liveChatValue',
      descriptionKey: 'contact.liveChatDescription'
    },
    {
      icon: Phone,
      titleKey: 'contact.prioritySupport',
      valueKey: 'contact.prioritySupportValue',
      descriptionKey: 'contact.prioritySupportDescription'
    }
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">{t('contact.thankYou')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('contact.thankYouMessage')}
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-purple-500 to-green-500 hover:from-purple-600 hover:to-green-600"
            >
              {t('contact.sendAnother')}
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
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
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            {t('contact.subtitle')}
          </p>
          
          {/* Crypto Payment Notice */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full border border-destructive/30"
          >
            <Bitcoin className="w-4 h-4" />
            <span className="font-medium">{t('contact.cryptoPaymentRequired')}</span>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">{t('contact.getInTouch')}</h3>
            
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4 flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-purple-500 to-green-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <method.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-foreground">{t(method.titleKey)}</h4>
                      <p className="text-primary font-medium">{t(method.valueKey)}</p>
                      <p className="text-sm text-muted-foreground">{t(method.descriptionKey)}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-muted rounded-lg p-4"
            >
              <h4 className="font-semibold text-foreground mb-2">{t('contact.businessHours')}</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>{t('contact.mondayFriday')}</span>
                  <span>{t('contact.weekdays')}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contact.weekends')}</span>
                  <span>{t('contact.limitedSupport')}</span>
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  {t('contact.priorityNote')}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="border-2 border-border shadow-lg">
              <CardHeader className="pb-6">
                <h3 className="text-2xl font-bold text-foreground">{t('contact.sendMessage')}</h3>
                <p className="text-muted-foreground">
                  {t('contact.formDescription')}
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('contact.name')} *</Label>
                      <Input
                        id="name"
                        placeholder={t('contact.name')}
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('contact.email')} *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t('contact.email')}
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="service">{t('contact.serviceNeeded')} *</Label>
                      <Select onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="border-border focus:border-primary">
                          <SelectValue placeholder={t('contact.selectService')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single">{t('contact.singleTrack')}</SelectItem>
                          <SelectItem value="album">{t('contact.albumPackage')}</SelectItem>
                          <SelectItem value="audit">{t('contact.professionalAudit')}</SelectItem>
                          <SelectItem value="custom">{t('contact.customSolution')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tracks">{t('contact.tracks')}</Label>
                      <Input
                        id="tracks"
                        type="number"
                        placeholder="1, 10, 50"
                        value={formData.tracks}
                        onChange={(e) => handleInputChange('tracks', e.target.value)}
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contact.message')} *</Label>
                    <Textarea
                      id="message"
                      placeholder={t('contact.messagePlaceholder')}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      rows={4}
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                    <h4 className="font-medium text-primary mb-2">{t('contact.whatHappensNext')}</h4>
                    <ul className="text-sm text-primary/80 space-y-1">
                      <li>{t('contact.step1')}</li>
                      <li>{t('contact.step2')}</li>
                      <li>{t('contact.step3')}</li>
                      <li>{t('contact.step4')}</li>
                    </ul>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-500 to-green-500 hover:from-purple-600 hover:to-green-600"
                  >
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{t('contact.submit')}</span>
                    </motion.div>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}