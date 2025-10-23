import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MessageSquare } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    resortName: "",
    email: "",
    countryCode: "+1",
    phone: "",
    message: ""
  });

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
                      <Select 
                        value={formData.countryCode} 
                        onValueChange={(value) => setFormData({ ...formData, countryCode: value })}
                      >
                        <SelectTrigger className="w-[140px]">
                          <SelectValue placeholder="Code" />
                        </SelectTrigger>
                        <SelectContent className="max-h-[300px]">
                          <SelectItem value="+93">🇦🇫 +93 (Afghanistan)</SelectItem>
                          <SelectItem value="+355">🇦🇱 +355 (Albania)</SelectItem>
                          <SelectItem value="+213">🇩🇿 +213 (Algeria)</SelectItem>
                          <SelectItem value="+376">🇦🇩 +376 (Andorra)</SelectItem>
                          <SelectItem value="+244">🇦🇴 +244 (Angola)</SelectItem>
                          <SelectItem value="+54">🇦🇷 +54 (Argentina)</SelectItem>
                          <SelectItem value="+374">🇦🇲 +374 (Armenia)</SelectItem>
                          <SelectItem value="+61">🇦🇺 +61 (Australia)</SelectItem>
                          <SelectItem value="+43">🇦🇹 +43 (Austria)</SelectItem>
                          <SelectItem value="+994">🇦🇿 +994 (Azerbaijan)</SelectItem>
                          <SelectItem value="+973">🇧🇭 +973 (Bahrain)</SelectItem>
                          <SelectItem value="+880">🇧🇩 +880 (Bangladesh)</SelectItem>
                          <SelectItem value="+375">🇧🇾 +375 (Belarus)</SelectItem>
                          <SelectItem value="+32">🇧🇪 +32 (Belgium)</SelectItem>
                          <SelectItem value="+501">🇧🇿 +501 (Belize)</SelectItem>
                          <SelectItem value="+229">🇧🇯 +229 (Benin)</SelectItem>
                          <SelectItem value="+975">🇧🇹 +975 (Bhutan)</SelectItem>
                          <SelectItem value="+591">🇧🇴 +591 (Bolivia)</SelectItem>
                          <SelectItem value="+387">🇧🇦 +387 (Bosnia)</SelectItem>
                          <SelectItem value="+267">🇧🇼 +267 (Botswana)</SelectItem>
                          <SelectItem value="+55">🇧🇷 +55 (Brazil)</SelectItem>
                          <SelectItem value="+673">🇧🇳 +673 (Brunei)</SelectItem>
                          <SelectItem value="+359">🇧🇬 +359 (Bulgaria)</SelectItem>
                          <SelectItem value="+226">🇧🇫 +226 (Burkina Faso)</SelectItem>
                          <SelectItem value="+257">🇧🇮 +257 (Burundi)</SelectItem>
                          <SelectItem value="+855">🇰🇭 +855 (Cambodia)</SelectItem>
                          <SelectItem value="+237">🇨🇲 +237 (Cameroon)</SelectItem>
                          <SelectItem value="+1">🇨🇦 +1 (Canada)</SelectItem>
                          <SelectItem value="+238">🇨🇻 +238 (Cape Verde)</SelectItem>
                          <SelectItem value="+236">🇨🇫 +236 (Central African Republic)</SelectItem>
                          <SelectItem value="+235">🇹🇩 +235 (Chad)</SelectItem>
                          <SelectItem value="+56">🇨🇱 +56 (Chile)</SelectItem>
                          <SelectItem value="+86">🇨🇳 +86 (China)</SelectItem>
                          <SelectItem value="+57">🇨🇴 +57 (Colombia)</SelectItem>
                          <SelectItem value="+269">🇰🇲 +269 (Comoros)</SelectItem>
                          <SelectItem value="+506">🇨🇷 +506 (Costa Rica)</SelectItem>
                          <SelectItem value="+385">🇭🇷 +385 (Croatia)</SelectItem>
                          <SelectItem value="+53">🇨🇺 +53 (Cuba)</SelectItem>
                          <SelectItem value="+357">🇨🇾 +357 (Cyprus)</SelectItem>
                          <SelectItem value="+420">🇨🇿 +420 (Czech Republic)</SelectItem>
                          <SelectItem value="+45">🇩🇰 +45 (Denmark)</SelectItem>
                          <SelectItem value="+253">🇩🇯 +253 (Djibouti)</SelectItem>
                          <SelectItem value="+593">🇪🇨 +593 (Ecuador)</SelectItem>
                          <SelectItem value="+20">🇪🇬 +20 (Egypt)</SelectItem>
                          <SelectItem value="+503">🇸🇻 +503 (El Salvador)</SelectItem>
                          <SelectItem value="+372">🇪🇪 +372 (Estonia)</SelectItem>
                          <SelectItem value="+251">🇪🇹 +251 (Ethiopia)</SelectItem>
                          <SelectItem value="+679">🇫🇯 +679 (Fiji)</SelectItem>
                          <SelectItem value="+358">🇫🇮 +358 (Finland)</SelectItem>
                          <SelectItem value="+33">🇫🇷 +33 (France)</SelectItem>
                          <SelectItem value="+241">🇬🇦 +241 (Gabon)</SelectItem>
                          <SelectItem value="+220">🇬🇲 +220 (Gambia)</SelectItem>
                          <SelectItem value="+995">🇬🇪 +995 (Georgia)</SelectItem>
                          <SelectItem value="+49">🇩🇪 +49 (Germany)</SelectItem>
                          <SelectItem value="+233">🇬🇭 +233 (Ghana)</SelectItem>
                          <SelectItem value="+30">🇬🇷 +30 (Greece)</SelectItem>
                          <SelectItem value="+502">🇬🇹 +502 (Guatemala)</SelectItem>
                          <SelectItem value="+224">🇬🇳 +224 (Guinea)</SelectItem>
                          <SelectItem value="+592">🇬🇾 +592 (Guyana)</SelectItem>
                          <SelectItem value="+509">🇭🇹 +509 (Haiti)</SelectItem>
                          <SelectItem value="+504">🇭🇳 +504 (Honduras)</SelectItem>
                          <SelectItem value="+852">🇭🇰 +852 (Hong Kong)</SelectItem>
                          <SelectItem value="+36">🇭🇺 +36 (Hungary)</SelectItem>
                          <SelectItem value="+354">🇮🇸 +354 (Iceland)</SelectItem>
                          <SelectItem value="+91">🇮🇳 +91 (India)</SelectItem>
                          <SelectItem value="+62">🇮🇩 +62 (Indonesia)</SelectItem>
                          <SelectItem value="+98">🇮🇷 +98 (Iran)</SelectItem>
                          <SelectItem value="+964">🇮🇶 +964 (Iraq)</SelectItem>
                          <SelectItem value="+353">🇮🇪 +353 (Ireland)</SelectItem>
                          <SelectItem value="+972">🇮🇱 +972 (Israel)</SelectItem>
                          <SelectItem value="+39">🇮🇹 +39 (Italy)</SelectItem>
                          <SelectItem value="+225">🇨🇮 +225 (Ivory Coast)</SelectItem>
                          <SelectItem value="+81">🇯🇵 +81 (Japan)</SelectItem>
                          <SelectItem value="+962">🇯🇴 +962 (Jordan)</SelectItem>
                          <SelectItem value="+7">🇰🇿 +7 (Kazakhstan)</SelectItem>
                          <SelectItem value="+254">🇰🇪 +254 (Kenya)</SelectItem>
                          <SelectItem value="+965">🇰🇼 +965 (Kuwait)</SelectItem>
                          <SelectItem value="+996">🇰🇬 +996 (Kyrgyzstan)</SelectItem>
                          <SelectItem value="+856">🇱🇦 +856 (Laos)</SelectItem>
                          <SelectItem value="+371">🇱🇻 +371 (Latvia)</SelectItem>
                          <SelectItem value="+961">🇱🇧 +961 (Lebanon)</SelectItem>
                          <SelectItem value="+231">🇱🇷 +231 (Liberia)</SelectItem>
                          <SelectItem value="+218">🇱🇾 +218 (Libya)</SelectItem>
                          <SelectItem value="+370">🇱🇹 +370 (Lithuania)</SelectItem>
                          <SelectItem value="+352">🇱🇺 +352 (Luxembourg)</SelectItem>
                          <SelectItem value="+261">🇲🇬 +261 (Madagascar)</SelectItem>
                          <SelectItem value="+60">🇲🇾 +60 (Malaysia)</SelectItem>
                          <SelectItem value="+960">🇲🇻 +960 (Maldives)</SelectItem>
                          <SelectItem value="+223">🇲🇱 +223 (Mali)</SelectItem>
                          <SelectItem value="+356">🇲🇹 +356 (Malta)</SelectItem>
                          <SelectItem value="+222">🇲🇷 +222 (Mauritania)</SelectItem>
                          <SelectItem value="+230">🇲🇺 +230 (Mauritius)</SelectItem>
                          <SelectItem value="+52">🇲🇽 +52 (Mexico)</SelectItem>
                          <SelectItem value="+373">🇲🇩 +373 (Moldova)</SelectItem>
                          <SelectItem value="+377">🇲🇨 +377 (Monaco)</SelectItem>
                          <SelectItem value="+976">🇲🇳 +976 (Mongolia)</SelectItem>
                          <SelectItem value="+382">🇲🇪 +382 (Montenegro)</SelectItem>
                          <SelectItem value="+212">🇲🇦 +212 (Morocco)</SelectItem>
                          <SelectItem value="+258">🇲🇿 +258 (Mozambique)</SelectItem>
                          <SelectItem value="+95">🇲🇲 +95 (Myanmar)</SelectItem>
                          <SelectItem value="+264">🇳🇦 +264 (Namibia)</SelectItem>
                          <SelectItem value="+977">🇳🇵 +977 (Nepal)</SelectItem>
                          <SelectItem value="+31">🇳🇱 +31 (Netherlands)</SelectItem>
                          <SelectItem value="+64">🇳🇿 +64 (New Zealand)</SelectItem>
                          <SelectItem value="+505">🇳🇮 +505 (Nicaragua)</SelectItem>
                          <SelectItem value="+227">🇳🇪 +227 (Niger)</SelectItem>
                          <SelectItem value="+234">🇳🇬 +234 (Nigeria)</SelectItem>
                          <SelectItem value="+850">🇰🇵 +850 (North Korea)</SelectItem>
                          <SelectItem value="+389">🇲🇰 +389 (North Macedonia)</SelectItem>
                          <SelectItem value="+47">🇳🇴 +47 (Norway)</SelectItem>
                          <SelectItem value="+968">🇴🇲 +968 (Oman)</SelectItem>
                          <SelectItem value="+92">🇵🇰 +92 (Pakistan)</SelectItem>
                          <SelectItem value="+970">🇵🇸 +970 (Palestine)</SelectItem>
                          <SelectItem value="+507">🇵🇦 +507 (Panama)</SelectItem>
                          <SelectItem value="+595">🇵🇾 +595 (Paraguay)</SelectItem>
                          <SelectItem value="+51">🇵🇪 +51 (Peru)</SelectItem>
                          <SelectItem value="+63">🇵🇭 +63 (Philippines)</SelectItem>
                          <SelectItem value="+48">🇵🇱 +48 (Poland)</SelectItem>
                          <SelectItem value="+351">🇵🇹 +351 (Portugal)</SelectItem>
                          <SelectItem value="+974">🇶🇦 +974 (Qatar)</SelectItem>
                          <SelectItem value="+40">🇷🇴 +40 (Romania)</SelectItem>
                          <SelectItem value="+7">🇷🇺 +7 (Russia)</SelectItem>
                          <SelectItem value="+250">🇷🇼 +250 (Rwanda)</SelectItem>
                          <SelectItem value="+966">🇸🇦 +966 (Saudi Arabia)</SelectItem>
                          <SelectItem value="+221">🇸🇳 +221 (Senegal)</SelectItem>
                          <SelectItem value="+381">🇷🇸 +381 (Serbia)</SelectItem>
                          <SelectItem value="+248">🇸🇨 +248 (Seychelles)</SelectItem>
                          <SelectItem value="+65">🇸🇬 +65 (Singapore)</SelectItem>
                          <SelectItem value="+421">🇸🇰 +421 (Slovakia)</SelectItem>
                          <SelectItem value="+386">🇸🇮 +386 (Slovenia)</SelectItem>
                          <SelectItem value="+27">🇿🇦 +27 (South Africa)</SelectItem>
                          <SelectItem value="+82">🇰🇷 +82 (South Korea)</SelectItem>
                          <SelectItem value="+211">🇸🇸 +211 (South Sudan)</SelectItem>
                          <SelectItem value="+34">🇪🇸 +34 (Spain)</SelectItem>
                          <SelectItem value="+94">🇱🇰 +94 (Sri Lanka)</SelectItem>
                          <SelectItem value="+249">🇸🇩 +249 (Sudan)</SelectItem>
                          <SelectItem value="+46">🇸🇪 +46 (Sweden)</SelectItem>
                          <SelectItem value="+41">🇨🇭 +41 (Switzerland)</SelectItem>
                          <SelectItem value="+963">🇸🇾 +963 (Syria)</SelectItem>
                          <SelectItem value="+886">🇹🇼 +886 (Taiwan)</SelectItem>
                          <SelectItem value="+992">🇹🇯 +992 (Tajikistan)</SelectItem>
                          <SelectItem value="+255">🇹🇿 +255 (Tanzania)</SelectItem>
                          <SelectItem value="+66">🇹🇭 +66 (Thailand)</SelectItem>
                          <SelectItem value="+228">🇹🇬 +228 (Togo)</SelectItem>
                          <SelectItem value="+216">🇹🇳 +216 (Tunisia)</SelectItem>
                          <SelectItem value="+90">🇹🇷 +90 (Turkey)</SelectItem>
                          <SelectItem value="+993">🇹🇲 +993 (Turkmenistan)</SelectItem>
                          <SelectItem value="+256">🇺🇬 +256 (Uganda)</SelectItem>
                          <SelectItem value="+380">🇺🇦 +380 (Ukraine)</SelectItem>
                          <SelectItem value="+971">🇦🇪 +971 (UAE)</SelectItem>
                          <SelectItem value="+44">🇬🇧 +44 (United Kingdom)</SelectItem>
                          <SelectItem value="+1">🇺🇸 +1 (United States)</SelectItem>
                          <SelectItem value="+598">🇺🇾 +598 (Uruguay)</SelectItem>
                          <SelectItem value="+998">🇺🇿 +998 (Uzbekistan)</SelectItem>
                          <SelectItem value="+58">🇻🇪 +58 (Venezuela)</SelectItem>
                          <SelectItem value="+84">🇻🇳 +84 (Vietnam)</SelectItem>
                          <SelectItem value="+967">🇾🇪 +967 (Yemen)</SelectItem>
                          <SelectItem value="+260">🇿🇲 +260 (Zambia)</SelectItem>
                          <SelectItem value="+263">🇿🇼 +263 (Zimbabwe)</SelectItem>
                          <SelectItem value="other">Other (enter manually)</SelectItem>
                        </SelectContent>
                      </Select>
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
