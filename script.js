/* دالة البيانات والمنطق العام عبر إطار Alpine.js */
function appData() {
    return {
        currentView: 'client',
        currentTab: 'slots',
        mobileMenuOpen: false,
        adminLoggedIn: false,
        adminPinInput: '',
        bookingSearch: '',
        
        toast: {
            show: false,
            title: '',
            message: '',
            type: 'success'
        },

        settings: {
            centerName: 'نبض العضلة',
            ownerName: 'ك/ يوسف صيام',
            phone: '01143310277',
            address: 'الزقازيق – بردين – شارع السوق – أمام محل أورجا'
        },

        daysOfWeek: ['السبت', 'الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'],

        sessions: [
            {
                id: 1,
                name: 'جلسة حجامة شاملة',
                price: 350,
                description: 'جلسة علاجية واستشفائية شاملة لمواضع السنة والمواضع الحركية لتنشيط الدورة الدموية وإزالة السموم.',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600',
                visible: true
            },
            {
                id: 2,
                name: 'جلسة استشفاء عضلي وتدليك',
                price: 300,
                description: 'جلسة متقدمة للرياضيين وأصحاب الأعمال الشاقة لإرخاء العضلات المشدودة وتسكين الآلام وإزالة الإجهاد.',
                image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=600',
                visible: true
            },
            {
                id: 3,
                name: 'الباقة المزدوجة (حجامة + استشفاء)',
                price: 550,
                description: 'الباقة الأكثر طلباً: جلسة حجامة شاملة يتبعها تدليك واستشفاء عضلي عميق لنتائج فورية وراحة تامة.',
                image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600',
                visible: true
            }
        ],

        availableSlots: [
            { id: 101, date: 'السبت', time: '04:00 عصراً', booked: false },
            { id: 102, date: 'الأحد', time: '06:00 مساءً', booked: false },
            { id: 103, date: 'الإثنين', time: '08:00 مساءً', booked: true },
            { id: 104, date: 'الثلاثاء', time: '05:00 عصراً', booked: false },
            { id: 105, date: 'الأربعاء', time: '07:30 مساءً', booked: false },
            { id: 106, date: 'الخميس', time: '06:00 مساءً', booked: false },
            { id: 107, date: 'الجمعة', time: '04:00 عصراً', booked: false }
        ],

        bookings: [
            {
                id: 1,
                clientName: 'أحمد محمود',
                clientPhone: '01112345678',
                sessionName: 'جلسة حجامة شاملة',
                slotId: 103,
                slotDateTime: 'الإثنين — 08:00 مساءً',
                status: 'مؤكد',
                notes: 'يعاني من ألم في أسفل الظهر'
            }
        ],

        faqs: [
            {
                question: 'هل الحجامة مؤلمة؟',
                answer: 'لا، الحجامة لا تسبب ألماً حقيقياً؛ بل تشعر بشد خفيف ووخز بسيط للغاية غير مؤلم، وغالباً ما يشعر المريض بارتخاء واسترخاء عميق أثناء وبعد الجلسة.'
            },
            {
                question: 'كم تستغرق الجلسة الواحدة؟',
                answer: 'تستغرق الجلسة عادةً ما بين 35 إلى 50 دقيقة تشمل التعقيم، وضع الكاسات، وجلسة الاستشفاء العضلي.'
            },
            {
                question: 'متى تظهر نتائج الاستشفاء العضلي والحجامة؟',
                answer: 'يشعر العميل بالخفة وزوال الشد العضلي فور انتهاء الجلسة مباشرة، وتتحسن كفاءة الجسم والدورة الدموية خلال الأيام التالية.'
            },
            {
                question: 'هل الأدوات مستخدمة لشخص واحد؟',
                answer: 'نعم تماماً، كافة كاسات الهواء والمشارط طبية ومعقمة وتُستخدم مرة واحدة فقط لكل عميل ثم تُتخلص منها فوراً.'
            }
        ],

        testimonials: [
            {
                id: 1,
                name: 'كابتن إسلام حسن',
                role: 'مدرب رياضي',
                comment: 'تجربة ممتازة جداً مع الكابتن يوسف صيام. جلسة الاستشفاء العضلي فرقت معايا جداً في أداء التمارين وزالت كل الشد العضلي.'
            },
            {
                id: 2,
                name: 'محمد إبراهيم',
                role: 'عميل دائم',
                comment: 'مركز نظيف ومحترف جداً في بردين، الالتزام بالمواعيد والتعقيم عالي جداً. أنصح بالباقة المزدوجة بشدة.'
            }
        ],

        bookingForm: {
            clientName: '',
            clientPhone: '',
            sessionName: '',
            selectedDay: '',
            slotId: '',
            notes: ''
        },

        newSlot: {
            date: '',
            time: ''
        },

        newSession: {
            name: '',
            price: '',
            description: '',
            image: '',
            visible: true
        },

        newClientTestimonial: {
            name: '',
            role: '',
            comment: ''
        },

        toggleAdminView() {
            if (this.currentView === 'admin') {
                this.currentView = 'client';
            } else {
                this.currentView = 'admin';
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },

        showToast(title, message, type = 'success') {
            this.toast.title = title;
            this.toast.message = message;
            this.toast.type = type;
            this.toast.show = true;
            setTimeout(() => {
                this.toast.show = false;
            }, 4000);
        },

        selectSessionAndBook(sessionName) {
            this.bookingForm.sessionName = sessionName;
            const bookingSection = document.getElementById('booking');
            if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: 'smooth' });
            }
        },

        validateEgyptianPhone(phone) {
            const egyptianPhoneRegex = /^01[0125][0-9]{8}$/;
            return egyptianPhoneRegex.test(phone);
        },

        submitBooking() {
            if (!this.validateEgyptianPhone(this.bookingForm.clientPhone)) {
                this.showToast('خطأ في رقم الهاتف', 'يرجى إدخال رقم هاتف مصري صحيح مكون من 11 رقماً (مثال: 01012345678).', 'error');
                return;
            }

            const slot = this.availableSlots.find(s => s.id == this.bookingForm.slotId);
            if (!slot || slot.booked) {
                this.showToast('الموعد غير متاح', 'عذراً، هذا الموعد تم حجوذه أو لم يعد متاحاً. يرجى اختيار موعد آخر.', 'error');
                return;
            }

            slot.booked = true;

            const newBooking = {
                id: Date.now(),
                clientName: this.bookingForm.clientName,
                clientPhone: this.bookingForm.clientPhone,
                sessionName: this.bookingForm.sessionName,
                slotId: slot.id,
                slotDateTime: slot.date + ' — ' + slot.time,
                status: 'جديد',
                notes: this.bookingForm.notes
            };

            this.bookings.unshift(newBooking);

            this.showToast('تم الحجز بنجاح!', 'تم تسجيل طلب حجزك بنجاح وسيتواصل معك الكابتن يوسف قريباً لتأكيد الموعد.');

            this.bookingForm = {
                clientName: '',
                clientPhone: '',
                sessionName: '',
                selectedDay: '',
                slotId: '',
                notes: ''
            };
        },

        loginAdmin() {
            if (this.adminPinInput === '2026') {
                this.adminLoggedIn = true;
                this.showToast('مرحباً بك', 'تم تسجيل الدخول للوحة التحكم بنجاح.');
            } else {
                this.showToast('خطأ في كلمة المرور', 'كلمة المرور غير صحيحة.', 'error');
            }
        },

        addSlot() {
            if (!this.newSlot.date || !this.newSlot.time) return;
            this.availableSlots.push({
                id: Date.now(),
                date: this.newSlot.date,
                time: this.newSlot.time,
                booked: false
            });
            this.newSlot.date = '';
            this.newSlot.time = '';
            this.showToast('تمت الإضافة', 'تم إضافة الموعد الجديد بنجاح.');
        },

        deleteSlot(id) {
            this.availableSlots = this.availableSlots.filter(s => s.id !== id);
            this.showToast('تم الحذف', 'تم حذف الموعد.');
        },

        generateBatchSlots() {
            this.daysOfWeek.forEach((day, index) => {
                this.availableSlots.push({ id: Date.now() + index * 2, date: day, time: '04:00 عصراً', booked: false });
                this.availableSlots.push({ id: Date.now() + index * 2 + 1, date: day, time: '07:30 مساءً', booked: false });
            });
            this.showToast('تم التوليد', 'تم توليد مواعيد كل أيام الأسبوع بنجاح.');
        },

        handleImageUpload(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.newSession.image = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },

        addSession() {
            if (!this.newSession.name || !this.newSession.price || !this.newSession.image) {
                this.showToast('تنبيه', 'يرجى إدخال اسم الجلسة والسعر ورفع الصورة.', 'error');
                return;
            }
            this.sessions.push({
                id: Date.now(),
                name: this.newSession.name,
                price: Number(this.newSession.price),
                description: this.newSession.description || 'جلسة علاجية متخصصة.',
                image: this.newSession.image,
                visible: true
            });
            this.newSession = { name: '', price: '', description: '', image: '', visible: true };
            this.showToast('تمت الإضافة', 'تمت إضافة الجلسة بنجاح.');
        },

        deleteSession(id) {
            this.sessions = this.sessions.filter(s => s.id !== id);
            this.showToast('تم الحذف', 'تم حذف الجلسة.');
        },

        submitClientTestimonial() {
            if (!this.newClientTestimonial.name || !this.newClientTestimonial.comment) return;
            this.testimonials.unshift({
                id: Date.now(),
                name: this.newClientTestimonial.name,
                role: this.newClientTestimonial.role || 'عميل للمركز',
                comment: this.newClientTestimonial.comment
            });
            this.newClientTestimonial = { name: '', role: '', comment: '' };
            this.showToast('شكراً لك!', 'تم إضافة رأيك بنجاح وعرضه في الموقع.');
        },

        updateBookingStatus(booking) {
            if (booking.status === 'ملغي') {
                const slot = this.availableSlots.find(s => s.id == booking.slotId);
                if (slot) slot.booked = false;
            }
            this.showToast('تم التحديث', 'تم تحديث حالة الحجز.');
        },

        deleteBooking(booking) {
            const slot = this.availableSlots.find(s => s.id == booking.slotId);
            if (slot) slot.booked = false;
            this.bookings = this.bookings.filter(b => b.id !== booking.id);
            this.showToast('تم الحذف', 'تم حذف الحجز وإعادة إتاحة الموعد.');
        },

        saveSettings() {
            this.showToast('تم الحفظ', 'تم تحديث إعدادات المركز العامة بنجاح.');
        },

        get filteredBookings() {
            if (!this.bookingSearch) return this.bookings;
            return this.bookings.filter(b => b.clientName.includes(this.bookingSearch) || b.clientPhone.includes(this.bookingSearch));
        }
    }
}