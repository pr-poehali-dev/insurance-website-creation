import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [loanAmount, setLoanAmount] = useState([5000000]);
  const [loanTerm, setLoanTerm] = useState([15]);
  const [propertyValue, setPropertyValue] = useState([8000000]);

  const calculateInsurance = () => {
    const amount = loanAmount[0];
    const term = loanTerm[0];
    const value = propertyValue[0];
    
    const mortgageInsurance = Math.round((amount * 0.008) / 12);
    const propertyInsurance = Math.round((value * 0.005) / 12);
    
    return { mortgageInsurance, propertyInsurance };
  };

  const { mortgageInsurance, propertyInsurance } = calculateInsurance();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <Icon name="Shield" size={20} className="text-white" />
              </div>
              <span className="text-xl font-heading font-bold">СтрахПолис</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="hover:text-primary transition-colors">О компании</a>
              <a href="#calculator" className="hover:text-primary transition-colors">Калькулятор</a>
              <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              Получить консультацию
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-heading font-bold mb-6">
                Страхование ипотеки
              </h1>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Icon name="ArrowRight" size={24} className="text-primary" />
                  <span className="text-xl">Скидка до 20%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="ArrowRight" size={24} className="text-primary" />
                  <span className="text-xl">Официально</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="ArrowRight" size={24} className="text-primary" />
                  <span className="text-xl">Без предоплаты</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 mb-8">
                <Icon name="Monitor" size={24} className="text-blue-400" />
                <span className="text-lg">Онлайн-полис за 10 минут</span>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
                Рассчитать стоимость
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/bd87fb1b-09e7-482e-b7de-90705797590b.jpg" 
                alt="Страхование ипотеки" 
                className="rounded-lg shadow-2xl opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Icon name="Home" size={32} className="text-primary" />
                  <CardTitle className="text-2xl font-heading text-white">Страхование ипотеки</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Защитите себя и свою семью от непредвиденных обстоятельств при ипотечном кредитовании
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Покрытие до 100% суммы кредита</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Защита от потери трудоспособности</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Страхование жизни заемщика</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Icon name="Building" size={32} className="text-primary" />
                  <CardTitle className="text-2xl font-heading text-white">Страхование недвижимости</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Комплексная защита вашей недвижимости от различных рисков и повреждений
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Страхование от пожара и стихийных бедствий</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Защита от противоправных действий</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Возмещение ущерба инженерным сетям</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Калькулятор страхования</h2>
          <Card className="bg-card border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-white">Рассчитайте стоимость страховки</CardTitle>
              <CardDescription className="text-gray-300">
                Получите предварительный расчет стоимости страхования ипотеки и недвижимости
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-white mb-2 block">Сумма кредита: {loanAmount[0].toLocaleString()} ₽</Label>
                    <Slider
                      value={loanAmount}
                      onValueChange={setLoanAmount}
                      max={20000000}
                      min={1000000}
                      step={100000}
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-white mb-2 block">Срок кредита: {loanTerm[0]} лет</Label>
                    <Slider
                      value={loanTerm}
                      onValueChange={setLoanTerm}
                      max={30}
                      min={5}
                      step={1}
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-white mb-2 block">Стоимость недвижимости: {propertyValue[0].toLocaleString()} ₽</Label>
                    <Slider
                      value={propertyValue}
                      onValueChange={setPropertyValue}
                      max={30000000}
                      min={2000000}
                      step={100000}
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div className="bg-gray-700/50 rounded-lg p-6">
                  <h3 className="text-xl font-heading font-bold text-white mb-4">Ежемесячные взносы:</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Страхование ипотеки:</span>
                      <span className="text-2xl font-bold text-primary">{mortgageInsurance.toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Страхование недвижимости:</span>
                      <span className="text-2xl font-bold text-primary">{propertyInsurance.toLocaleString()} ₽</span>
                    </div>
                    <div className="border-t border-gray-600 pt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-bold">Общая сумма:</span>
                        <span className="text-2xl font-bold text-secondary">{(mortgageInsurance + propertyInsurance).toLocaleString()} ₽</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                    Оформить полис
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6">О компании СтрахПолис</h2>
              <p className="text-gray-300 text-lg mb-6">
                Мы специализируемся на страховании ипотеки и недвижимости более 15 лет. 
                Наша компания помогла тысячам клиентов защитить свои инвестиции и обеспечить 
                спокойствие при покупке жилья.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-gray-300">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                  <div className="text-gray-300">довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99%</div>
                  <div className="text-gray-300">одобренных заявок</div>
                </div>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                Узнать больше
              </Button>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Icon name="Shield" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Надежная защита</h3>
                  <p className="text-gray-300">Комплексное страхование с максимальным покрытием рисков</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Clock" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Быстрое оформление</h3>
                  <p className="text-gray-300">Онлайн-заявка и получение полиса за 10 минут</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Users" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Персональный подход</h3>
                  <p className="text-gray-300">Индивидуальные условия для каждого клиента</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-700 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-white hover:text-primary">
                Обязательно ли страхование ипотеки?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300">
                Страхование ипотеки является обязательным требованием большинства банков при выдаче 
                ипотечного кредита. Это защищает как заемщика, так и банк от финансовых рисков.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-gray-700 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-white hover:text-primary">
                Какие случаи покрывает страховка?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300">
                Стандартный полис покрывает смерть заемщика, потерю трудоспособности, критические 
                заболевания. Дополнительно можно включить потерю работы и другие риски.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-gray-700 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-white hover:text-primary">
                Можно ли изменить страховую компанию?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300">
                Да, вы можете сменить страховую компанию в любой момент действия кредитного договора. 
                Главное - обеспечить непрерывность страхового покрытия.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-gray-700 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-white hover:text-primary">
                Как быстро выплачивается страховка?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300">
                При наступлении страхового случая выплата производится в течение 30 дней после 
                предоставления всех необходимых документов и завершения расследования.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Контакты</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-card border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={24} className="text-primary" />
                  <CardTitle className="text-white">Телефон</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg">+7 (495) 123-45-67</p>
                <p className="text-gray-400">Ежедневно с 9:00 до 21:00</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={24} className="text-primary" />
                  <CardTitle className="text-white">Email</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg">info@strahpolis.ru</p>
                <p className="text-gray-400">Ответим в течение часа</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  <CardTitle className="text-white">Офис</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg">г. Москва, ул. Тверская, 10</p>
                <p className="text-gray-400">ПН-ПТ с 9:00 до 18:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <Icon name="Shield" size={20} className="text-white" />
                </div>
                <span className="text-xl font-heading font-bold">СтрахПолис</span>
              </div>
              <p className="text-gray-400">
                Надежное страхование ипотеки и недвижимости с 2009 года
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Страхование ипотеки</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Страхование недвижимости</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Консультации</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Лицензии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Отзывы</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Поддержка</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Документы</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 СтрахПолис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;