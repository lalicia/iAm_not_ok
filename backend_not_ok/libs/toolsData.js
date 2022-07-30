const toolsData = [
    {
        name: "Headspace",
        type: "mobile app, Netflix program, website",
        description: "Meditation and sleep made simple",
        link: "https://www.headspace.com/",
        imageUrl: "https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/265546887_10158521640749080_1788363244475602597_n.png?_nc_cat=111&ccb=1-7&_nc_sid=9267fe&_nc_ohc=onOF_tIfWygAX_1JV4e&_nc_ht=scontent-man2-1.xx&oh=00_AT9Rz0WECONz43DU5qoZhpJQnC2lmSizvjhtnLrxD2gWDQ&oe=62E889B6"
    },
    {
        name: "Finch",
        type: "mobile app",
        description: "Self-care widget pet: take care of yourself by taking care of your pet",
        link: "https://finchcare.com/",
        imageUrl: "https://pbs.twimg.com/media/E4GkUI3UcAAV5ph.jpg"
    },
    {
        name: "Woebot",
        type: "mobile app",
        description: "Self-care expert in CBT (Cognitive Behavioural Therapy) and mindfulness - a robot designed to help with anxiety and depression",
        link: "https://woebothealth.com/",
        imageUrl: "https://www.mobihealthnews.com/sites/default/files/Screen%20Shot%202017-06-06%20at%202.52.59%20PM.png"
    },
    {
        name: "moodgym",
        type: "website",
        description: "Interactive program that helps you to learn and practise skills which can help to prevent and manage symptoms of depression and anxiety",
        link: "https://moodgym.com.au/",
        imageUrl: "https://foundrybc.ca/wp-content/uploads/2020/01/PARTNER-LOGO-mood-gym.jpg"
    },
    {
        name: "Why Has Nobody Told Me This Before? - Dr Julie Smith",
        type: "book",
        description: "Advice and powerful coping techniques to help you stay resilient no matter what life throws your way...you can turn straight to the section you need depending on the challenge you're facing",
        link: "https://www.google.com/search?q=why+has+nobody+told+me+this+before&sxsrf=ALiCzsb4ZQtlVQ92mk3EHDBJuQz9zM9LOQ:1659173138028&source=lnms&tbm=shop&sa=X&ved=2ahUKEwjj7YzMpaD5AhXUSsAKHePmBj0Q_AUoAXoECAIQAw&biw=1536&bih=763&dpr=1.25",
        imageUrl: "https://m.media-amazon.com/images/I/41fcKJGaNUL.jpg"
    },
    {
        name: "Everything is Figureoutable - Marie Forleo",
        type: "book",
        description: "Will train your brain to think more positively and help you break down any dream into manageable steps",
        link: "https://www.google.com/search?q=everything+is+figureoutable+by+marie+forleo&sa=X&biw=1536&bih=763&tbm=shop&sxsrf=ALiCzsbxdqxQa5WwNU2-ww1HQAPs5ae9LA%3A1659173139518&ei=E_nkYtD0HovFgQbGgZEQ&oq=everything+is+figureou&gs_lcp=Cgtwcm9kdWN0cy1jYxADGAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBAgAEBgyBAgAEBgyBAgAEBgyBAgAEBgyBAgAEBgyBAgAEBgyBAgAEBg6CAgAEIAEELADOgQIIxAnOgsIABCABBCxAxCDAToECAAQA0oECEEYAVD-B1iIKmDIO2gDcAB4AIABYIgBoQ2SAQIyMpgBAKABAcgBCsABAQ&sclient=products-cc",
        imageUrl: "https://m.media-amazon.com/images/I/51+xEK81PbS._SY346_.jpg"
    },
    {
        name: "You Are A Badass: How to Stop Doubting Your Greatness and Start Living an Awesome Life - Jen Sincero",
        type: "book",
        description: "Hilariously inspiring stories, sage advice, easy exercises, and the occasional swear word",
        link: "https://www.google.com/search?q=you+are+a+badass+by+jen+sincero&sa=X&biw=1536&bih=763&tbm=shop&sxsrf=ALiCzsZkTNswmTkwsgvNmhdbPEPGJ4DAtA%3A1659173257954&ei=ifnkYpHLOYuWhbIPrMG2wAQ&oq=you+are+a+bad&gs_lcp=Cgtwcm9kdWN0cy1jYxADGAYyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgQIABBDOgsIABCABBCxAxCDAToECAAQAzoHCAAQgAQQCkoECEEYAFAAWKoKYP8kaABwAHgAgAFhiAH1B5IBAjEzmAEAoAEBwAEB&sclient=products-cc",
        imageUrl: "https://m.media-amazon.com/images/I/51LrZ2xk5eL._SY346_.jpg"
    },
    {
        name: "untamed: stop pleasing, start living - Glennon Doyle",
        type: "book",
        description: "Explores the joy and peace we discover when we stop striving to meet the expectations of the world, and instead dare to listen to and trust in the voice deep inside us",
        link: "https://www.google.com/search?q=untamed+stop+pleasing+start+living&sa=X&biw=1536&bih=763&tbm=shop&sxsrf=ALiCzsYEiUb-Gy5GoExVL5TCkV564WlTtw%3A1659173336218&ei=2PnkYvHGDNCVhbIP58SDOA&oq=untamed%3A+stop&gs_lcp=Cgtwcm9kdWN0cy1jYxADGAAyBQgAEIAEMgQIABAYMggIABAeEBYQGDIICAAQHhAWEBg6CAgAEIAEELADOgcIABCwAxAYOgkIABAeELADEBg6BAgjECc6CwgAEIAEELEDEIMBSgQIQRgBULElWKo1YLJGaANwAHgAgAFfiAH7B5IBAjEzmAEAoAEByAEGwAEB&sclient=products-cc",
        imageUrl: "https://m.media-amazon.com/images/I/518J0uP0afS._SY346_.jpg"
    },
    {
        name: "Yellow Brick Cinema: Relaxing Music",
        type: "youtube station",
        description: "Relaxing music 24/7",
        link: "https://www.youtube.com/watch?v=aWtWtWdwVHg",
        imageUrl: "https://yt3.ggpht.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s176-c-k-c0x00ffffff-no-rj"
    },
]

export default toolsData;