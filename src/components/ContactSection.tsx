import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Mail, MessageSquare, Check, ChevronsUpDown } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const countryCodes = [
  { value: "+93", label: "🇦🇫 +93 Afghanistan" },
  { value: "+355", label: "🇦🇱 +355 Albania" },
  { value: "+213", label: "🇩🇿 +213 Algeria" },
  { value: "+376", label: "🇦🇩 +376 Andorra" },
  { value: "+244", label: "🇦🇴 +244 Angola" },
  { value: "+54", label: "🇦🇷 +54 Argentina" },
  { value: "+374", label: "🇦🇲 +374 Armenia" },
  { value: "+61", label: "🇦🇺 +61 Australia" },
  { value: "+43", label: "🇦🇹 +43 Austria" },
  { value: "+994", label: "🇦🇿 +994 Azerbaijan" },
  { value: "+973", label: "🇧🇭 +973 Bahrain" },
  { value: "+880", label: "🇧🇩 +880 Bangladesh" },
  { value: "+375", label: "🇧🇾 +375 Belarus" },
  { value: "+32", label: "🇧🇪 +32 Belgium" },
  { value: "+501", label: "🇧🇿 +501 Belize" },
  { value: "+229", label: "🇧🇯 +229 Benin" },
  { value: "+975", label: "🇧🇹 +975 Bhutan" },
  { value: "+591", label: "🇧🇴 +591 Bolivia" },
  { value: "+387", label: "🇧🇦 +387 Bosnia" },
  { value: "+267", label: "🇧🇼 +267 Botswana" },
  { value: "+55", label: "🇧🇷 +55 Brazil" },
  { value: "+673", label: "🇧🇳 +673 Brunei" },
  { value: "+359", label: "🇧🇬 +359 Bulgaria" },
  { value: "+226", label: "🇧🇫 +226 Burkina Faso" },
  { value: "+257", label: "🇧🇮 +257 Burundi" },
  { value: "+855", label: "🇰🇭 +855 Cambodia" },
  { value: "+237", label: "🇨🇲 +237 Cameroon" },
  { value: "+1", label: "🇨🇦 +1 Canada" },
  { value: "+238", label: "🇨🇻 +238 Cape Verde" },
  { value: "+236", label: "🇨🇫 +236 Central African Republic" },
  { value: "+235", label: "🇹🇩 +235 Chad" },
  { value: "+56", label: "🇨🇱 +56 Chile" },
  { value: "+86", label: "🇨🇳 +86 China" },
  { value: "+57", label: "🇨🇴 +57 Colombia" },
  { value: "+269", label: "🇰🇲 +269 Comoros" },
  { value: "+506", label: "🇨🇷 +506 Costa Rica" },
  { value: "+385", label: "🇭🇷 +385 Croatia" },
  { value: "+53", label: "🇨🇺 +53 Cuba" },
  { value: "+357", label: "🇨🇾 +357 Cyprus" },
  { value: "+420", label: "🇨🇿 +420 Czech Republic" },
  { value: "+45", label: "🇩🇰 +45 Denmark" },
  { value: "+253", label: "🇩🇯 +253 Djibouti" },
  { value: "+593", label: "🇪🇨 +593 Ecuador" },
  { value: "+20", label: "🇪🇬 +20 Egypt" },
  { value: "+503", label: "🇸🇻 +503 El Salvador" },
  { value: "+372", label: "🇪🇪 +372 Estonia" },
  { value: "+251", label: "🇪🇹 +251 Ethiopia" },
  { value: "+679", label: "🇫🇯 +679 Fiji" },
  { value: "+358", label: "🇫🇮 +358 Finland" },
  { value: "+33", label: "🇫🇷 +33 France" },
  { value: "+241", label: "🇬🇦 +241 Gabon" },
  { value: "+220", label: "🇬🇲 +220 Gambia" },
  { value: "+995", label: "🇬🇪 +995 Georgia" },
  { value: "+49", label: "🇩🇪 +49 Germany" },
  { value: "+233", label: "🇬🇭 +233 Ghana" },
  { value: "+30", label: "🇬🇷 +30 Greece" },
  { value: "+502", label: "🇬🇹 +502 Guatemala" },
  { value: "+224", label: "🇬🇳 +224 Guinea" },
  { value: "+592", label: "🇬🇾 +592 Guyana" },
  { value: "+509", label: "🇭🇹 +509 Haiti" },
  { value: "+504", label: "🇭🇳 +504 Honduras" },
  { value: "+852", label: "🇭🇰 +852 Hong Kong" },
  { value: "+36", label: "🇭🇺 +36 Hungary" },
  { value: "+354", label: "🇮🇸 +354 Iceland" },
  { value: "+91", label: "🇮🇳 +91 India" },
  { value: "+62", label: "🇮🇩 +62 Indonesia" },
  { value: "+98", label: "🇮🇷 +98 Iran" },
  { value: "+964", label: "🇮🇶 +964 Iraq" },
  { value: "+353", label: "🇮🇪 +353 Ireland" },
  { value: "+972", label: "🇮🇱 +972 Israel" },
  { value: "+39", label: "🇮🇹 +39 Italy" },
  { value: "+225", label: "🇨🇮 +225 Ivory Coast" },
  { value: "+81", label: "🇯🇵 +81 Japan" },
  { value: "+962", label: "🇯🇴 +962 Jordan" },
  { value: "+7", label: "🇰🇿 +7 Kazakhstan" },
  { value: "+254", label: "🇰🇪 +254 Kenya" },
  { value: "+965", label: "🇰🇼 +965 Kuwait" },
  { value: "+996", label: "🇰🇬 +996 Kyrgyzstan" },
  { value: "+856", label: "🇱🇦 +856 Laos" },
  { value: "+371", label: "🇱🇻 +371 Latvia" },
  { value: "+961", label: "🇱🇧 +961 Lebanon" },
  { value: "+231", label: "🇱🇷 +231 Liberia" },
  { value: "+218", label: "🇱🇾 +218 Libya" },
  { value: "+370", label: "🇱🇹 +370 Lithuania" },
  { value: "+352", label: "🇱🇺 +352 Luxembourg" },
  { value: "+261", label: "🇲🇬 +261 Madagascar" },
  { value: "+60", label: "🇲🇾 +60 Malaysia" },
  { value: "+960", label: "🇲🇻 +960 Maldives" },
  { value: "+223", label: "🇲🇱 +223 Mali" },
  { value: "+356", label: "🇲🇹 +356 Malta" },
  { value: "+222", label: "🇲🇷 +222 Mauritania" },
  { value: "+230", label: "🇲🇺 +230 Mauritius" },
  { value: "+52", label: "🇲🇽 +52 Mexico" },
  { value: "+373", label: "🇲🇩 +373 Moldova" },
  { value: "+377", label: "🇲🇨 +377 Monaco" },
  { value: "+976", label: "🇲🇳 +976 Mongolia" },
  { value: "+382", label: "🇲🇪 +382 Montenegro" },
  { value: "+212", label: "🇲🇦 +212 Morocco" },
  { value: "+258", label: "🇲🇿 +258 Mozambique" },
  { value: "+95", label: "🇲🇲 +95 Myanmar" },
  { value: "+264", label: "🇳🇦 +264 Namibia" },
  { value: "+977", label: "🇳🇵 +977 Nepal" },
  { value: "+31", label: "🇳🇱 +31 Netherlands" },
  { value: "+64", label: "🇳🇿 +64 New Zealand" },
  { value: "+505", label: "🇳🇮 +505 Nicaragua" },
  { value: "+227", label: "🇳🇪 +227 Niger" },
  { value: "+234", label: "🇳🇬 +234 Nigeria" },
  { value: "+850", label: "🇰🇵 +850 North Korea" },
  { value: "+389", label: "🇲🇰 +389 North Macedonia" },
  { value: "+47", label: "🇳🇴 +47 Norway" },
  { value: "+968", label: "🇴🇲 +968 Oman" },
  { value: "+92", label: "🇵🇰 +92 Pakistan" },
  { value: "+970", label: "🇵🇸 +970 Palestine" },
  { value: "+507", label: "🇵🇦 +507 Panama" },
  { value: "+595", label: "🇵🇾 +595 Paraguay" },
  { value: "+51", label: "🇵🇪 +51 Peru" },
  { value: "+63", label: "🇵🇭 +63 Philippines" },
  { value: "+48", label: "🇵🇱 +48 Poland" },
  { value: "+351", label: "🇵🇹 +351 Portugal" },
  { value: "+974", label: "🇶🇦 +974 Qatar" },
  { value: "+40", label: "🇷🇴 +40 Romania" },
  { value: "+7", label: "🇷🇺 +7 Russia" },
  { value: "+250", label: "🇷🇼 +250 Rwanda" },
  { value: "+966", label: "🇸🇦 +966 Saudi Arabia" },
  { value: "+221", label: "🇸🇳 +221 Senegal" },
  { value: "+381", label: "🇷🇸 +381 Serbia" },
  { value: "+248", label: "🇸🇨 +248 Seychelles" },
  { value: "+65", label: "🇸🇬 +65 Singapore" },
  { value: "+421", label: "🇸🇰 +421 Slovakia" },
  { value: "+386", label: "🇸🇮 +386 Slovenia" },
  { value: "+27", label: "🇿🇦 +27 South Africa" },
  { value: "+82", label: "🇰🇷 +82 South Korea" },
  { value: "+211", label: "🇸🇸 +211 South Sudan" },
  { value: "+34", label: "🇪🇸 +34 Spain" },
  { value: "+94", label: "🇱🇰 +94 Sri Lanka" },
  { value: "+249", label: "🇸🇩 +249 Sudan" },
  { value: "+46", label: "🇸🇪 +46 Sweden" },
  { value: "+41", label: "🇨🇭 +41 Switzerland" },
  { value: "+963", label: "🇸🇾 +963 Syria" },
  { value: "+886", label: "🇹🇼 +886 Taiwan" },
  { value: "+992", label: "🇹🇯 +992 Tajikistan" },
  { value: "+255", label: "🇹🇿 +255 Tanzania" },
  { value: "+66", label: "🇹🇭 +66 Thailand" },
  { value: "+228", label: "🇹🇬 +228 Togo" },
  { value: "+216", label: "🇹🇳 +216 Tunisia" },
  { value: "+90", label: "🇹🇷 +90 Turkey" },
  { value: "+993", label: "🇹🇲 +993 Turkmenistan" },
  { value: "+256", label: "🇺🇬 +256 Uganda" },
  { value: "+380", label: "🇺🇦 +380 Ukraine" },
  { value: "+971", label: "🇦🇪 +971 UAE" },
  { value: "+44", label: "🇬🇧 +44 United Kingdom" },
  { value: "+1", label: "🇺🇸 +1 United States" },
  { value: "+598", label: "🇺🇾 +598 Uruguay" },
  { value: "+998", label: "🇺🇿 +998 Uzbekistan" },
  { value: "+58", label: "🇻🇪 +58 Venezuela" },
  { value: "+84", label: "🇻🇳 +84 Vietnam" },
  { value: "+967", label: "🇾🇪 +967 Yemen" },
  { value: "+260", label: "🇿🇲 +260 Zambia" },
  { value: "+263", label: "🇿🇼 +263 Zimbabwe" },
  { value: "other", label: "Other (enter manually)" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    resortName: "",
    email: "",
    countryCode: "+1",
    phone: "",
    message: ""
  });
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would normally send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      resortName: "",
      email: "",
      countryCode: "+1",
      phone: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Modernize Your Resort's Guest Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your website into a powerful booking tool? Get in touch today.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-md border border-border animate-slide-up">
            <h3 className="text-2xl font-semibold text-card-foreground mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Smith"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="resortName">Resort Name</Label>
                <Input
                  id="resortName"
                  type="text"
                  value={formData.resortName}
                  onChange={(e) => setFormData({ ...formData, resortName: e.target.value })}
                  placeholder="Paradise Beach Resort"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@paradiseresort.com"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <div className="flex gap-2 mt-2">
                  {formData.countryCode !== "other" ? (
                    <>
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[180px] justify-between"
                          >
                            {formData.countryCode
                              ? countryCodes.find((country) => country.value === formData.countryCode)?.label.split(' ')[0] + ' ' + formData.countryCode
                              : "Select code..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[300px] p-0" align="start">
                          <Command>
                            <CommandInput placeholder="Search country code..." />
                            <CommandList>
                              <CommandEmpty>No country found.</CommandEmpty>
                              <CommandGroup>
                                {countryCodes.map((country) => (
                                  <CommandItem
                                    key={country.value}
                                    value={country.label}
                                    onSelect={() => {
                                      setFormData({ ...formData, countryCode: country.value });
                                      setOpen(false);
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        formData.countryCode === country.value ? "opacity-100" : "opacity-0"
                                      )}
                                    />
                                    {country.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="123 456 7890"
                        className="flex-1"
                      />
                    </>
                  ) : (
                    <>
                      <Input
                        type="text"
                        value={formData.countryCode === "other" ? "" : formData.countryCode}
                        onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                        placeholder="+1"
                        className="w-[100px]"
                      />
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="123 456 7890"
                        className="flex-1"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setFormData({ ...formData, countryCode: "+1" })}
                        className="whitespace-nowrap"
                      >
                        Select from list
                      </Button>
                    </>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your resort's website and tell us more about your needs. Are you interested in the Standard plan or would you prefer a custom Enterprise solution?"
                  required
                  className="mt-2 min-h-[120px]"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="bg-card rounded-2xl p-8 shadow-md border border-border">
              <h3 className="text-2xl font-semibold text-card-foreground mb-6">Get in touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground mb-1">Email</div>
                    <a href="mailto:support@terelight.com" className="text-muted-foreground hover:text-accent transition-colors">
                      support@terelight.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground mb-1">WhatsApp</div>
                    <a href="https://wa.me/1234567890" className="text-muted-foreground hover:text-accent transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-primary rounded-2xl p-8 shadow-lg text-primary-foreground">
              <h4 className="text-xl font-semibold mb-3">Quick Response Guarantee</h4>
              <p className="opacity-90 leading-relaxed">
                We respond to all inquiries within 24 hours. For urgent requests, please contact us via WhatsApp for immediate assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
