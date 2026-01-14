import React, { useState } from 'react';
import { 
  BookOpen, 
  Share2, 
  User, 
  Video, 
  ShoppingCart, 
  CheckCircle, 
  Menu, 
  X,
  Smartphone,
  Award,
  Book,
  BrainCircuit,
  Globe,
  Database,
  Code,
  AlertTriangle,
  FileText
} from 'lucide-react';

// --- Data & Content ---

const authorInfo = {
  name: "মোহাম্মদ রফিকুল ইসলাম",
  title: "সিনিয়র লেকচারার (ICT)",
  experience: "১০ বছরের অভিজ্ঞতাসম্পন্ন",
  institution: "ঢাকা রেসিডেনসিয়াল মডেল কলেজ (প্রাক্তন)",
  bio: "বিগত ১০ বছর ধরে আইসিটি শিক্ষাদানে নিয়োজিত। শিক্ষার্থীদের সর্বোচ্চ সাফল্যের জন্য প্রশ্ন বিশ্লেষণের মাধ্যমে এই সাজেশনটি তৈরি করা হয়েছে।"
};

const syllabusData = [
  {
    id: 1,
    title: "অধ্যায় ১: তথ্য ও যোগাযোগ প্রযুক্তি (বিশ্ব ও বাংলাদেশ)",
    expectedCQ: "১টি CQ নিশ্চিত",
    icon: <Globe size={24} />,
    color: "bg-blue-100 text-blue-600",
    topics: [
      { name: "ভার্চুয়াল রিয়েলিটি (VR)", importance: "high", tags: ["CQ", "MCQ"] },
      { name: "কৃত্রিম বুদ্ধিমত্তা (AI) ও রোবোটিক্স", importance: "very-high", tags: ["CQ", "***"] },
      { name: "বায়োমেট্রিক্স ও বায়োইনফরমেটিক্স", importance: "high", tags: ["CQ"] },
      { name: "ক্রায়োসার্জারি ও ন্যানো টেকনোলজি", importance: "very-high", tags: ["CQ", "***"] },
      { name: "সাইবার আইন ও নৈতিকতা", importance: "medium", tags: ["MCQ", "CQ"] },
    ]
  },
  {
    id: 2,
    title: "অধ্যায় ২: কমিউনিকেশন সিস্টেম ও নেটওয়ার্কিং",
    expectedCQ: "১টি CQ নিশ্চিত",
    icon: <Share2 size={24} />,
    color: "bg-green-100 text-green-600",
    topics: [
      { name: "ডেটা ট্রান্সমিশন মোড ও মেথড", importance: "high", tags: ["MCQ", "CQ"] },
      { name: "অপটিক্যাল ফাইবার ও ওয়্যারলেস মাধ্যম (Wi-Fi, WiMAX)", importance: "very-high", tags: ["CQ", "***"] },
      { name: "মোবাইল জেনারেশন (1G-5G)", importance: "high", tags: ["MCQ", "CQ"] },
      { name: "নেটওয়ার্ক টপোলজি ও ক্লাউড কম্পিউটিং", importance: "very-high", tags: ["CQ", "***"] },
    ]
  },
  {
    id: 3,
    title: "অধ্যায় ৩: সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস",
    expectedCQ: "২টি CQ আসার সম্ভাবনা",
    highlight: true,
    icon: <BrainCircuit size={24} />,
    color: "bg-purple-100 text-purple-600",
    topics: [
      { name: "সংখ্যা পদ্ধতির রূপান্তর (Bin, Oct, Hex, Dec)", importance: "high", tags: ["MCQ", "Math"] },
      { name: "চিহ্নযুক্ত সংখ্যা ও ২-এর পরিপূরক", importance: "very-high", tags: ["CQ", "***"] },
      { name: "বুলিয়ান অ্যালজেব্রা ও ডিমর্গানের উপপাদ্য", importance: "high", tags: ["CQ"] },
      { name: "লজিক গেইট (সর্বজনীন গেইট বাস্তবায়ন)", importance: "very-high", tags: ["CQ", "***"] },
      { name: "অ্যাডার, রেজিস্টার ও কাউন্টার", importance: "high", tags: ["CQ", "Hard"] },
    ]
  },
  {
    id: 4,
    title: "অধ্যায় ৪: ওয়েব ডিজাইন পরিচিতি ও HTML",
    expectedCQ: "১টি CQ নিশ্চিত",
    icon: <Code size={24} />,
    color: "bg-orange-100 text-orange-600",
    topics: [
      { name: "ওয়েবসাইটের কাঠামো (Static vs Dynamic)", importance: "high", tags: ["CQ"] },
      { name: "HTML ট্যাগ (Table, List, Hyperlink, Image)", importance: "very-high", tags: ["CQ", "***"] },
      { name: "ওয়েবসাইট পাবলিশিং ধাপসমূহ", importance: "medium", tags: ["MCQ", "CQ"] },
    ]
  },
  {
    id: 5,
    title: "অধ্যায় ৫: প্রোগ্রামিং ভাষা (C Language)",
    expectedCQ: "২টি CQ আসার সম্ভাবনা",
    highlight: true,
    icon: <Smartphone size={24} />,
    color: "bg-red-100 text-red-600",
    topics: [
      { name: "অ্যালগরিদম ও ফ্লোচার্ট", importance: "very-high", tags: ["CQ", "Must Read"] },
      { name: "ভেরিয়েবল, ডেটা টাইপ ও ইনপুট-আউটপুট", importance: "high", tags: ["CQ", "Basic"] },
      { name: "লুপ (Loop) ও কন্ডিশনাল স্টেটমেন্ট", importance: "very-high", tags: ["CQ", "***"] },
      { name: "ফাংশন ও অ্যারে", importance: "high", tags: ["CQ"] },
      { name: "ভাষার স্তর (High vs Mid Level)", importance: "medium", tags: ["MCQ"] },
    ]
  },
  {
    id: 6,
    title: "অধ্যায় ৬: ডেটাবেজ ম্যানেজমেন্ট সিস্টেম (DBMS)",
    expectedCQ: "১টি CQ নিশ্চিত",
    icon: <Database size={24} />,
    color: "bg-indigo-100 text-indigo-600",
    topics: [
      { name: "রিলেশনশিপ (1:1, 1:M, M:M)", importance: "very-high", tags: ["CQ", "***"] },
      { name: "SQL কুয়েরি (Select, Where, Order By)", importance: "very-high", tags: ["CQ", "***"] },
      { name: "ডেটা এনক্রিপশন ও সিকিউরিটি", importance: "high", tags: ["CQ"] },
      { name: "Key পরিচিতি (Primary, Foreign)", importance: "high", tags: ["MCQ", "CQ"] },
    ]
  }
];

const courses = [
  {
    id: 1,
    title: "HSC 2026 ICT ক্র্যাশ কোর্স",
    price: "৳১,৫০০",
    originalPrice: "৳৩,০০০",
    features: ["অধ্যায় ৩ ও ৫ এর উপর বিশেষ ফোকাস", "৬০টি লাইভ ক্লাস", "১০টি মডেল টেস্ট", "সলভ ক্লাস"]
  },
  {
    id: 2,
    title: "C প্রোগ্রামিং ও HTML মাস্টারক্লাস",
    price: "৳৮০০",
    originalPrice: "৳১,২০০",
    features: ["ব্যবহারিক অংশ (২৫ নম্বর) প্রস্তুতি", "৩০টি প্রজেক্ট বেসড ক্লাস", "সার্টিফিকেট"]
  }
];

// --- Components ---

const Notification = ({ message, onClose }) => (
  <div className="fixed top-4 right-4 bg-gray-900 text-white px-4 py-3 rounded-lg shadow-xl z-50 animate-fade-in-down flex items-center border-l-4 border-green-500">
    <CheckCircle size={20} className="mr-3 text-green-400" />
    <span className="font-medium">{message}</span>
  </div>
);

const Badge = ({ type }) => {
  if (type === 'very-high') return <span className="bg-red-50 text-red-600 text-[10px] md:text-xs px-2 py-1 rounded-full font-bold border border-red-100 shadow-sm">অতি গুরুত্বপূর্ণ (***)</span>;
  if (type === 'high') return <span className="bg-blue-50 text-blue-600 text-[10px] md:text-xs px-2 py-1 rounded-full font-semibold border border-blue-100">গুরুত্বপূর্ণ (**)</span>;
  return <span className="bg-gray-100 text-gray-600 text-[10px] md:text-xs px-2 py-1 rounded-full">বেসিক ধারণা</span>;
};

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [notification, setNotification] = useState(null);

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleShare = () => {
    const shareData = {
      title: 'HSC ICT Suggestion 2026',
      text: '২০২৬ এইচএসসি পরীক্ষার্থীদের জন্য পূর্ণাঙ্গ আইসিটি সাজেশন অ্যাপ!',
      url: window.location.href
    };

    if (navigator.share) {
      navigator.share(shareData).catch((err) => console.log('Error sharing', err));
    } else {
      // Fallback for desktop or unsupported browsers
      try {
        const tempInput = document.createElement("input");
        tempInput.value = window.location.href;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        showNotification("লিংক কপি করা হয়েছে!");
      } catch (e) {
        showNotification("লিংক কপি করতে সমস্যা হয়েছে।");
      }
    }
  };

  const handleOrder = (courseName) => {
    showNotification(`${courseName}-এ এনরোলমেন্ট রিকোয়েস্ট সফল হয়েছে!`);
  };

  // --- Views ---

  const renderHome = () => (
    <div className="space-y-6 animate-fade-in pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <BrainCircuit size={180} />
        </div>
        <div className="relative z-10">
          <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block backdrop-blur-sm">HSC 2026 স্পেশাল</span>
          <h1 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">ICT একটি সাবজেক্ট, <br/>কিন্তু পাস করতে হবে ২ বার!</h1>
          <p className="text-indigo-100 mb-6 max-w-lg text-sm md:text-base opacity-90">
            আইসিটিতে সিকিউ (CQ) এবং এমসিকিউ (MCQ) অংশে আলাদাভাবে পাস করা বাধ্যতামূলক। কোনো একটিতে ফেল করলে পুরো বিষয়ে ফেল।
          </p>
          <button 
            onClick={() => setActiveTab('suggestions')}
            className="bg-white text-indigo-700 px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-indigo-50 transition transform hover:scale-105 flex items-center gap-2"
          >
            <BookOpen size={18} />
            সাজেশন দেখুন
          </button>
        </div>
      </div>

      {/* Warning / Pass Marks Section */}
      <div className="bg-red-50 border border-red-100 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="text-red-500" size={24} />
          <h3 className="text-lg font-bold text-red-700">পাস মার্ক সতর্কতা</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-3 rounded-lg border border-red-100 text-center">
            <p className="text-xs text-gray-500 mb-1">সৃজনশীল (CQ)</p>
            <p className="text-2xl font-bold text-red-600">১৬ <span className="text-sm text-gray-400">/ ৫০</span></p>
            <p className="text-[10px] text-red-500 font-medium">পাস মার্ক</p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-red-100 text-center">
            <p className="text-xs text-gray-500 mb-1">এমসিকিউ (MCQ)</p>
            <p className="text-2xl font-bold text-red-600">০৮ <span className="text-sm text-gray-400">/ ২৫</span></p>
            <p className="text-[10px] text-red-500 font-medium">পাস মার্ক</p>
          </div>
        </div>
        <p className="text-xs text-red-600 mt-3 text-center bg-red-100 py-1 rounded">
          বি:দ্র: ব্যবহারিক ২৫ নম্বরের পাস মার্ক আলাদাভাবে হিসাব হবে।
        </p>
      </div>

      {/* Strategic Guidelines */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
            <Award className="text-yellow-500" size={20} />
            এ-প্লাস (A+) পাওয়ার কৌশল
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>অধ্যায় ৩ ও ৫</strong> থেকে মোট ৪টি সৃজনশীল প্রশ্ন আসার সম্ভাবনা। এগুলো ভালো করে পড়লে পাস এবং ভালো রেজাল্ট সহজ।</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span><strong>অধ্যায় ৪ (HTML)</strong> থেকে ১টি সহজ প্রশ্ন আসবে, যা উত্তর করা সুবিধাজনক।</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
            <FileText className="text-blue-500" size={20} />
            MCQ গাইডলাইন
          </h3>
          <div className="bg-blue-50 p-3 rounded-lg mb-2">
             <p className="text-sm font-bold text-blue-800 mb-1">গুরুত্বপূর্ণ বোর্ড প্রশ্ন:</p>
             <div className="flex gap-2">
               <span className="bg-white px-2 py-1 rounded text-xs font-bold text-blue-600 border border-blue-200">২০২৪</span>
               <span className="bg-white px-2 py-1 rounded text-xs font-bold text-blue-600 border border-blue-200">২০১৯</span>
               <span className="bg-white px-2 py-1 rounded text-xs font-bold text-blue-600 border border-blue-200">২০১৮</span>
             </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            * পূর্ণাঙ্গ সিলেবাসের প্রস্তুতির জন্য শর্ট সিলেবাসের বছরগুলো (২০২১-২৩) এড়িয়ে চলাই ভালো।
          </p>
        </div>
      </div>
    </div>
  );

  const renderSuggestions = () => (
    <div className="space-y-6 animate-fade-in pb-20">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">অধ্যায়ভিত্তিক সাজেশন</h2>
          <p className="text-xs text-gray-500">২০২৬ পূর্ণাঙ্গ সিলেবাস অনুযায়ী</p>
        </div>
        <div className="flex gap-2 text-xs font-medium">
          <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">High Yield (Ch 3 & 5)</span>
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">Standard Yield</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {syllabusData.map((chapter) => (
          <div key={chapter.id} className={`bg-white rounded-xl shadow-md border overflow-hidden hover:shadow-lg transition-shadow relative ${chapter.highlight ? 'border-purple-200 ring-1 ring-purple-100' : 'border-gray-100'}`}>
            {chapter.highlight && (
              <div className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] px-2 py-1 rounded-bl-lg font-bold">
                Most Important
              </div>
            )}
            <div className={`p-4 flex items-center space-x-3 ${chapter.color} bg-opacity-10`}>
              <div className={`p-2 rounded-lg bg-white shadow-sm`}>
                {chapter.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-sm md:text-base">{chapter.title}</h3>
                <span className="text-[10px] bg-white px-2 py-0.5 rounded-full font-medium shadow-sm border border-gray-100 mt-1 inline-block text-gray-600">
                  {chapter.expectedCQ}
                </span>
              </div>
            </div>
            <div className="p-4">
              <ul className="space-y-3">
                {chapter.topics.map((topic, idx) => (
                  <li key={idx} className="flex justify-between items-start border-b border-dashed border-gray-100 last:border-0 pb-2 last:pb-0">
                    <div className="flex-1 pr-2">
                      <p className="text-gray-700 text-sm font-medium">{topic.name}</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {topic.tags.map(tag => (
                          <span key={tag} className={`text-[9px] px-1.5 py-0.5 rounded ${tag === '***' ? 'bg-red-100 text-red-600 font-bold' : 'bg-gray-100 text-gray-500'}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Badge type={topic.importance} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-6 animate-fade-in pb-20">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">প্রিমিয়াম কোর্সসমূহ</h2>
        <p className="text-gray-500 text-sm mt-1">পূর্ণাঙ্গ সিলেবাস শেষ করার সেরা প্লাটফর্ম</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {courses.map(course => (
          <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 relative group hover:border-blue-200 transition-all">
             <div className="bg-gray-50 p-6 border-b border-gray-100 group-hover:bg-blue-50 transition-colors">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-blue-600">{course.price}</span>
                  <span className="text-sm text-gray-400 line-through mb-1">{course.originalPrice}</span>
                </div>
             </div>
             <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {course.features.map((feat, i) => (
                    <li key={i} className="flex items-center text-gray-600 text-sm">
                      <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => handleOrder(course.title)}
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
                >
                  <ShoppingCart size={18} />
                  কোর্সটি কিনুন
                </button>
             </div>
          </div>
        ))}
      </div>
      
      {/* Resource Tip */}
      <div className="bg-indigo-900 rounded-xl p-6 text-white mt-8 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
             <Video className="text-yellow-400" />
             <h3 className="font-bold text-lg">জটিল টপিক বুঝতে সমস্যা?</h3>
          </div>
          <p className="text-indigo-200 text-sm mb-4">
            অধ্যায় ৩ ও ৫ এর জটিল অঙ্ক এবং প্রোগ্রামিং বুঝতে সহায়ক বই (যেমন: ICT Magic) এর QR Code স্ক্যান করে ভিডিও ক্লাসগুলো দেখে নিতে পারো।
          </p>
          <button className="bg-white text-indigo-900 px-4 py-2 rounded-lg text-sm font-bold hover:bg-indigo-50 transition">
             ভিডিও গাইডলাইন দেখুন
          </button>
        </div>
        <div className="absolute -right-6 -bottom-6 opacity-10">
           <Smartphone size={150} />
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="animate-fade-in flex flex-col items-center justify-center pt-8 pb-20">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden text-center border border-gray-100">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-32 w-full relative">
           <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
             <div className="w-24 h-24 rounded-full bg-white p-1.5 shadow-lg">
               <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
                  <User size={48} className="text-gray-400" />
               </div>
             </div>
           </div>
        </div>
        <div className="pt-16 pb-8 px-8">
           <h2 className="text-2xl font-bold text-gray-800">{authorInfo.name}</h2>
           <p className="text-blue-600 font-semibold text-sm">{authorInfo.title}</p>
           <p className="text-gray-500 text-sm mt-1 mb-4">{authorInfo.institution}</p>
           
           <div className="flex justify-center gap-2 mb-6">
             <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold border border-blue-100">
               {authorInfo.experience}
             </span>
           </div>

           <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
             "{authorInfo.bio}"
           </p>

           <div className="grid grid-cols-2 gap-3">
             <button onClick={handleShare} className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition font-medium text-sm">
               <Share2 size={16} /> শেয়ার অ্যাপ
             </button>
             <button className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-medium text-sm shadow-lg shadow-blue-200">
               <Video size={16} /> ফ্রি ক্লাস
             </button>
           </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20 md:pb-0">
      
      {notification && <Notification message={notification} onClose={() => setNotification(null)} />}

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-30 border-b border-gray-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-md">
              <BrainCircuit size={20} />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-800 leading-none">ICT Master</h1>
              <span className="text-[10px] text-blue-600 font-bold tracking-wider">BATCH 2026</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-1">
            {['home', 'suggestions', 'courses', 'profile'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)} 
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === tab ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
              >
                {tab === 'home' && 'হোম'}
                {tab === 'suggestions' && 'সাজেশন'}
                {tab === 'courses' && 'কোর্স'}
                {tab === 'profile' && 'শিক্ষক'}
              </button>
            ))}
          </nav>

          <button onClick={handleShare} className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 md:hidden transition">
            <Share2 size={18} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 md:py-8 max-w-4xl">
        {activeTab === 'home' && renderHome()}
        {activeTab === 'suggestions' && renderSuggestions()}
        {activeTab === 'courses' && renderCourses()}
        {activeTab === 'profile' && renderProfile()}
      </main>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-40 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="grid grid-cols-4 h-16">
          <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center justify-center space-y-1 ${activeTab === 'home' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-500'}`}>
            <BookOpen size={20} strokeWidth={activeTab === 'home' ? 2.5 : 2} />
            <span className="text-[10px] font-medium">হোম</span>
          </button>
          <button onClick={() => setActiveTab('suggestions')} className={`flex flex-col items-center justify-center space-y-1 ${activeTab === 'suggestions' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-500'}`}>
            <Book size={20} strokeWidth={activeTab === 'suggestions' ? 2.5 : 2} />
            <span className="text-[10px] font-medium">সাজেশন</span>
          </button>
          <button onClick={() => setActiveTab('courses')} className={`flex flex-col items-center justify-center space-y-1 ${activeTab === 'courses' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-500'}`}>
            <ShoppingCart size={20} strokeWidth={activeTab === 'courses' ? 2.5 : 2} />
            <span className="text-[10px] font-medium">কোর্স</span>
          </button>
          <button onClick={() => setActiveTab('profile')} className={`flex flex-col items-center justify-center space-y-1 ${activeTab === 'profile' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-500'}`}>
            <User size={20} strokeWidth={activeTab === 'profile' ? 2.5 : 2} />
            <span className="text-[10px] font-medium">শিক্ষক</span>
          </button>
        </div>
      </div>
      
      {/* Styles for animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-fade-in-down {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .pb-safe {
          padding-bottom: env(safe-area-inset-bottom);
        }
      `}</style>
    </div>
  );
};

export default App;
