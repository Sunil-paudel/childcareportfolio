import { ContextSection, ReferenceItem } from '../types';

export const CONTEXTS_DATA: ContextSection[] = [
  {
    id: 'economic',
    title: 'Economic Contexts',
    subtitle: 'Poverty, Housing Stress, and Financial Hardship',
    category: 'Context 1',
    badgeColor: 'amber',
    iconName: 'Coins',
    imageUrl: 'https://images.unsplash.com/photo-1588075592765-2feb7de1f86d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Nob29sJTIwa2lkJTIwZWF0aW5nfGVufDB8fDB8fHww',
    imageAlt: 'Child nutrition, food security, and mealtime inclusion in early learning settings.',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1609051968500-82562b2c2b54?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNoaWxkcmVuJTIwc2hhcmluZyUyMHRveXN8ZW58MHx8MHx8fDA%3D',
    secondaryImageAlt: 'Inclusive play and material resource sharing among young children in ECEC.',
    understanding: {
      paragraphs: [
        "Economic hardship occurs when a family's income cannot cover housing, food, health care and daily living costs. This is a growing problem in Australia: Australian Council of Social Service and UNSW Sydney (2025) found that approximately one in six Australian children (around 757,000) live below the poverty line, driven by the end of pandemic income support and rising living costs. Single parents are over-represented among families in poverty, who receive roughly 44% less income than needed to meet the poverty line, leaving many unable to afford essentials such as textbooks, medical care or heating (Australian Council of Social Service & UNSW Sydney, 2025).",
        "Several sociological and developmental models help educators understand economic disadvantage. Bronfenbrenner's bioecological systems theory locates poverty in the macrosystem and exosystem — the broader economic and policy systems shaping a child's home and early childhood service (Bronfenbrenner, 1979). Bourdieu (1986) extended this by linking a lack of economic capital to a lack of social and cultural capital, creating an intergenerational disadvantage spiral. Conger and Elder's Family Stress Model explains the mechanism further: parental stress can break down parent–child relationships and, in turn, produce children's socio-emotional difficulties (Conger & Elder, 1994). Poverty in Australia is not static — it increasingly affects working families as well as those without work, driven by housing and rental costs outpacing wages (Australian Council of Social Service & UNSW Sydney, 2025)."
      ]
    },
    impact: {
      paragraphs: [
        "Economic hardship affects almost every aspect of a young child's development. Financial strain is associated with reduced access to nutritious food, stable housing and health care, all of which affect physical growth and cognitive development during the critical early years. Financial stress can increase parental anxiety and depression, which in turn produces less warm, consistent and responsive parenting — a pattern linked to secure attachment and self-regulation in young children (Conger & Elder, 1994). Children from low-income families may arrive at early childhood services without the “hidden” resources their peers have, such as books, excursions and extra-curricular activities, which can affect confidence and peer relationships; services must also avoid unintentionally deepening this disadvantage through hidden costs like excursion fees, “free dress” days and incursion charges. This is not only a family matter but a driver of enrolment stability, attendance and engagement, since low-income families face higher barriers to accessing and sustaining early learning participation (OECD, 2025)."
      ]
    },
    policy: {
      paragraphs: [
        "The Australian Government's Early Years Strategy 2024–2034 is the key national policy response, setting a ten-year vision that ‘all children in Australia thrive’ with a dedicated outcome area for meeting children's basic needs, including nutritious food (Australian Government Department of Education, 2024; Australian Government Department of Social Services, 2024). Recent systemic responses include increases to income support (JobSeeker and Parenting Payment) and expanded subsidised early learning access, though ACOSS remains concerned that income support is still too low, particularly for young people and sole parents (Australian Council of Social Service & UNSW Sydney, 2025). The OECD review of Australian early childhood policy identifies universal services such as ECEC, combined with targeted supports, as an effective lever for tackling inequality before it escalates (OECD, 2025). This creates obligations and opportunities for services: eligibility pathways for extra Child Care Subsidy, integration with universal health services, and a responsibility to actively identify and respond to family hardship rather than treat it as beyond their scope."
      ]
    },
    strategies: [
      "Adopt a strengths-based, stigma-free pedagogy that does not focus on the deficit of low-income families, but instead recognises and builds on family strengths and knowledge (Bourdieu, 1986).",
      "Lower the barriers to participation by offering shared uniforms and resources, flexible payment arrangements, and minimising incursion and excursion fees.",
      "Incorporate food security programs, such as breakfast clubs or a common morning meal, in line with the Early Years Strategy's outcome of meeting children's “basic needs” (Australian Government Department of Social Services, 2024).",
      "Build warm referral pathways by developing relationships with financial counselling and emergency relief services, so families are sensitively connected to support rather than left to fend for themselves.",
      "Establish trusting family partnerships through frequent, non-judgemental communication with families, using a Family Partnership Model that helps to minimise stigma and promote early disclosure of hardship."
    ],
    partnerships: [
      {
        name: "The Smith Family — Learning for Life",
        description: "Offers financial and mentoring support to children from low-income families to help keep them engaged in education.",
        websiteUrl: "https://www.thesmithfamily.com.au/"
      },
      {
        name: "Anglicare Australia",
        description: "Provides family support, financial counselling and emergency relief, and can refer families to, and facilitate, family workshops.",
        websiteUrl: "https://www.anglicare.asn.au/"
      },
      {
        name: "St Vincent de Paul Society (Vinnies)",
        description: "Provides emergency relief (food, utilities, material aid) and can be a direct referral option for families in crisis.",
        websiteUrl: "https://www.vinnies.org.au/"
      },
      {
        name: "Good Shepherd Australia New Zealand",
        description: "Runs financial literacy and no-interest loan programs, such as Saver Plus, to help families become financially resilient.",
        websiteUrl: "https://goodshep.org.au/"
      },
      {
        name: "National Debt Helpline",
        description: "Provides free, professional financial counselling to help families with budgeting and debt advice, to which services can refer families.",
        websiteUrl: "https://ndh.org.au/"
      }
    ],
    resources: {
      programs: [
        { name: "The Smith Family – Learning for Life", url: "https://www.thesmithfamily.com.au/" },
        { name: "Foodbank Australia – School Breakfast Program", url: "https://www.foodbank.org.au/" },
        { name: "Raising Children Network – financial hardship and parenting resources", url: "https://raisingchildren.net.au/" },
        { name: "Good Shepherd – Saver Plus financial literacy program", url: "https://goodshep.org.au/" }
      ],
      storybooks: [
        { title: "Last Stop on Market Street", author: "Matt de la Peña" },
        { title: "A Chair for My Mother", author: "Vera B. Williams" },
        { title: "Those Shoes", author: "Maribeth Boelts" },
        { title: "Fly Away Home", author: "Eve Bunting" }
      ],
      media: [
        {
          title: "Play School",
          platform: "ABC Kids",
          description: "Models everyday family diversity, including economic difference",
          url: "https://iview.abc.net.au/"
        },
        {
          title: "Daniel Tiger's Neighborhood",
          platform: "PBS Kids",
          description: "Episodes addressing “wants versus needs” and family budgeting concepts",
          url: "https://pbskids.org/daniel"
        },
        {
          title: "Sesame Street in Communities",
          platform: "Sesame Workshop",
          description: "Resources featuring Lily, a Muppet who experiences food insecurity, designed to help children process hardship",
          url: "https://sesamestreetincommunities.org/"
        },
        {
          title: "Bluey",
          platform: "ABC Kids/Ludo Studio",
          description: "Depicts everyday family life and resilience in an accessible, relatable way",
          url: "https://www.bluey.tv/"
        }
      ],
      pedagogicalSynthesis: "These resources help educators gently open conversations about fairness, sharing and difference, building children's empathy without shame while giving families experiencing hardship a sense that their circumstances are seen and normalised rather than hidden."
    }
  },
  {
    id: 'social',
    title: 'Social Contexts',
    subtitle: 'Isolation, Divorce, and Out-of-Home Care',
    category: 'Context 2',
    badgeColor: 'blue',
    iconName: 'Users',
    imageUrl: 'https://images.unsplash.com/photo-1587235587172-f05eee42fdac?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNvbWZvcnRpbmclMjBhJTIwY2hpbGQlMjIlMjBvciUyMCUyMnRlYWNoZXIlMjB0YWxraW5nJTIwdG8lMjB0b2RkbGVyfGVufDB8fDB8fHww',
    imageAlt: 'Relational comfort, secure attachment, and primary educator support for young children in ECEC.',
    understanding: {
      paragraphs: [
        "Social contexts of disadvantage include situations where a child's family relationships, household structure or social connectedness are disrupted — geographical or social isolation, parental separation and divorce, and out-of-home care (OOHC). Early childhood literature often treats these as separate “issues”, but they are better understood as a continuum of family disruption sharing one developmental risk: disruption of children's primary attachment relationships and social networks during a critical developmental period. Framing them together is a deliberate analytical choice that foregrounds this shared mechanism of harm rather than surface differences in cause.",
        "Attachment theory (Bowlby, 1969) dominates this context: disruption of the primary caregiving relationship — through parental conflict, household transition or removal to care — can affect a child's sense of security and later ability to form trusting relationships. However, an attachment-only lens risks narrowing the focus to individual family issues. Family systems theory (Minuchin, 1974) offers an alternative, viewing divorce and separation as a reorganisation of the family system rather than a single traumatic event: the impact on children depends less on the separation itself than on how the adults manage conflict and co-parenting — the “damage” is not inherent in divorce but in how it is handled. Putnam's (2000) concept of social capital is more explanatory still, locating the source of harm not in the family unit itself but in the lack of informal community networks — extended family, neighbours, playgroups — that would otherwise buffer families from stress.",
        "Out-of-home care sits at the extreme end of this continuum, where the gap between adult and child perspectives is most pronounced. The AIHW reports 44,900 children in out-of-home care at 30 June 2024 (7.7 per 1,000), with Aboriginal and Torres Strait Islander children significantly over-represented at around 50 per 1,000 (20,000 children) compared with 4.6 per 1,000 for non-Indigenous children (Australian Institute of Health and Welfare, 2025a). This is not a neutral statistical imbalance; Aboriginal-led organisations such as SNAICC frame it as reflecting the legacy of forced removal policies and systemic bias in child protection decision-making, rather than as a simple “risk factor”."
      ]
    },
    impact: {
      paragraphs: [
        "These effects on development are well documented but unevenly distributed. Children experiencing divorce or separation are, on average, more likely to have behavioural and emotional problems, though this is more strongly linked to ongoing parental conflict than to the separation itself (Minuchin, 1974) — meaning interventions should target conflict and co-parenting quality rather than “managing” the divorce itself. In 2024, 47,216 divorces were granted in Australia, and almost half traditionally involve children under 18 (Australian Bureau of Statistics, 2025), making this a common part of family life for many services, not a rare occurrence.",
        "The risk is compounded for children in out-of-home care by disrupted attachment and frequent placement changes, and, for the many First Nations children affected, by loss of culture, language and community — a distinct harm on top of the loss of the immediate family relationship. Yet there is little evidence that children's voices are heard in Australian child protection data: OOHC decision-making and outcome measurement remain dominated by case-file and caseworker records, even though very young children can meaningfully communicate their views through age-appropriate protocols such as drawing (Grace et al., 2022). This is a significant constraint: a system built to safeguard children's welfare seldom asks children what safety and wellbeing means to them."
      ]
    },
    policy: {
      paragraphs: [
        "The National Framework for Protecting Australia's Children 2021–2031 is the main national strategy addressing child abuse and neglect, targeting a 45% reduction in the over-representation of Aboriginal and Torres Strait Islander children in out-of-home care by 2031 (Australian Government Department of Social Services, 2021; Closing the Gap Target 12). This is a welcome recognition of structural injustice, but SNAICC's Family Matters Report shows little measurable progress, consistently finding that naming a goal in policy is necessary but insufficient without funded, enforceable mechanisms and a genuine transfer of decision-making power to Aboriginal Community Controlled Organisations. Australia's response to divorce and separation operates largely through the family law system and government-funded Family Relationship Centres, while the child protection response is developmental and early-childhood focused — which may explain why ECEC services are not routinely treated as formal partners in family law processes, despite regular, trusted contact with young children during separation."
      ]
    },
    strategies: [
      "Consistent key-person and primary caregiver practice to support children in, or transitioning into, OOHC and to re-establish a sense of secure attachment (Bowlby, 1969) through trauma-informed, attachment-focused practice.",
      "Non-partisan, conflict-sensitive assistance to separating families, without taking sides with either parent, and consistent routines and communication between two households.",
      "Establishing informal social capital for isolated families through playgroups, parent networks, and community activities that mirror the informal supports Putnam (2000) found to be protective.",
      "Culturally safe practice for First Nations children in care, through active partnership with Aboriginal Community Controlled Organisations and adherence to the Aboriginal and Torres Strait Islander Child Placement Principle.",
      "Developmentally appropriate emotional expression tools, such as storytelling, drawing, and play-based check-ins, that allow children to process family change in a low-pressure way.",
      "Genuine inclusion of the child's voice, through participatory, child-friendly approaches (Grace et al., 2022), to directly ask children what they are perceiving about the change, not just relying on what adults observe and report."
    ],
    partnerships: [
      {
        name: "CREATE Foundation",
        description: "The national peak body representing children and young people with an out-of-home care experience; can inform service practice and link families to peer support.",
        websiteUrl: "https://create.org.au/"
      },
      {
        name: "Relationships Australia",
        description: "Provides family relationship counselling, post-separation support and Family Relationship Centre services.",
        websiteUrl: "https://www.relationships.org.au/"
      },
      {
        name: "Life Without Barriers",
        description: "A large foster and kinship care provider, and a direct partner for services supporting children in care.",
        websiteUrl: "https://www.lwb.org.au/"
      },
      {
        name: "Family Relationship Advice Line (Australian Government)",
        description: "Provides free and confidential advice to separating families about parenting arrangements.",
        websiteUrl: "https://www.familyrelationships.gov.au/"
      },
      {
        name: "SNAICC — National Voice for our Children",
        description: "The national peak body for Aboriginal and Torres Strait Islander children; a critical partner for culturally safe support and connection to Aboriginal Community Controlled Organisations.",
        websiteUrl: "https://www.snaicc.org.au/"
      }
    ],
    resources: {
      programs: [
        { name: "Raising Children Network – separation and divorce parenting resources", url: "https://raisingchildren.net.au/" },
        { name: "CREATE Foundation – advocacy and resources for children/young people in care", url: "https://create.org.au/" },
        { name: "Relationships Australia – family relationship and post-separation support", url: "https://www.relationships.org.au/" },
        { name: "Family Relationship Advice Line", url: "https://www.familyrelationships.gov.au/" }
      ],
      storybooks: [
        { title: "Two Homes", author: "Claire Masurel" },
        { title: "A Family Is a Family Is a Family", author: "Sara O'Leary" },
        { title: "The Invisible String", author: "Patrice Karst" },
        { title: "The Family Book", author: "Todd Parr" }
      ],
      media: [
        {
          title: "Puffin Rock",
          platform: "RTÉjr/Netflix",
          description: "Gentle stories about siblings and family bonds that support emotional literacy",
          url: "https://www.puffinrock.tv/"
        },
        {
          title: "Topsy and Tim",
          platform: "CBeebies",
          description: "Models everyday family transitions and change, such as moving house and new routines",
          url: "https://www.bbc.co.uk/cbeebies/shows/topsy-and-tim"
        },
        {
          title: "Bing",
          platform: "CBeebies",
          description: "Toddler series modelling secure, responsive caregiving relationships",
          url: "https://www.bbc.co.uk/cbeebies/shows/bing"
        },
        {
          title: "Kinderling Kids Radio",
          platform: "Australian podcast network",
          description: "Audio content supporting emotional literacy in young children",
          url: "https://kinderling.com.au/"
        }
      ],
      pedagogicalSynthesis: "These resources give children low-stakes, story-based ways to encounter family change before or alongside their own experience of it, which can normalise difference and reduce the isolation children may feel when their family structure doesn't match a “typical” model — though educators should be careful not to use these resources as a substitute for asking individual children how they feel about their own situation."
    }
  },
  {
    id: 'cultural',
    title: 'Cultural and Diversity Contexts',
    subtitle: 'First Nations, Immigrant, and Refugee Families',
    category: 'Context 3',
    badgeColor: 'emerald',
    iconName: 'Globe',
    imageUrl: 'https://images.unsplash.com/photo-1563457039413-0c39b8e8963d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjYzfHxkaXZlcnNlJTIwcGFyZW50JTIwZWR1Y2F0b3IlMjBtZWV0aW5nfGVufDB8fDB8fHww',
    imageAlt: 'Culturally diverse family and educator collaborative partnership in early childhood education.',
    understanding: {
      paragraphs: [
        "Cultural and diversity contexts include families whose cultural, linguistic or ancestral background places them outside the Anglo-Australian “mainstream” — most obviously Aboriginal and Torres Strait Islander families, and immigrant and refugee families from culturally and linguistically diverse (CALD) backgrounds. These groups are often grouped together in early childhood literature under the umbrella term “diversity”, but this is worth questioning: First Nations families are not a minority migrant group in a new culture; they are the original custodians of the land, dealing with the ongoing impacts of colonisation, dispossession and forced assimilation within their own country. Lumping these distinct histories together as “cultural diversity” risks obscuring the specific, structural nature of First Nations disadvantage beneath a more generic, easier-to-accept story of cultural difference.",
        "Bronfenbrenner's (1979) ecological systems theory is often applied here, placing a child's development within nested systems including family, community and culture (the macrosystem), and showing how a child's experience of an early childhood setting is shaped by cultural values, language and belief systems before they even arrive. Berry's (2005) acculturation framework is relevant for immigrant and refugee families, explaining the strategies families may adopt and predicting that outcomes are best when integration — maintaining home culture while engaging with the new one — is supported rather than merely tolerated. An “acculturation” lens is unsuitable for First Nations families, however, as it implies they are the ones “adjusting” to a foreign culture. A more fitting lens is critical and decolonising theory (Martin, 2008), which views the early childhood sector — its curriculum, assessment tools and notions of “school readiness” — as historically built around Western norms, meaning the sector itself, not only the child, must change for genuine inclusion.",
        "This context is reflected in Australia's population, over one in four of whom were born overseas, and in the Aboriginal and Torres Strait Islander population, which is small but growing and concentrated in the youngest age groups. It is also changing quickly, with significant policy momentum towards self-determination and Aboriginal-led early childhood services over the last decade, alongside a shifting refugee intake that has included specific visa responses to Afghan, Ukrainian and Palestinian families (Refugee Council of Australia, 2025)."
      ]
    },
    impact: {
      paragraphs: [
        "The developmental gap for Aboriginal and Torres Strait Islander children has persisted and is now wider than ever. Progress on this Closing the Gap target is currently worsening: only 33.9% of Aboriginal and Torres Strait Islander children are developmentally on track across all five domains at school entry, down from 35.2% at the 2018 baseline, compared with 52.9% of children nationally (Australian Government Department of Education, 2025; Productivity Commission, 2025). This does not reflect any lessening of ability in Aboriginal families; it reflects the cumulative impacts of intergenerational trauma, socioeconomic disadvantage, remoteness, and services that are not culturally safe or truly accessible.",
        "Developmental concerns for children from immigrant and refugee backgrounds include language development (where English is an additional language or dialect, EAL/D), disrupted early attachment and safety for those who experienced conflict or displacement before arrival, and the role of the child as informal interpreter or cultural broker, which can affect their sense of safety. Both groups point to the same implication: a curriculum, environment and staff team built around one cultural default will systematically under-serve children whose home culture and language differ from it, regardless of actual ability."
      ]
    },
    policy: {
      paragraphs: [
        "Closing the Gap Target 4 commits to raising the proportion of Aboriginal and Torres Strait Islander children developmentally on track across all five AEDC domains to 55% by 2031 (Closing the Gap, 2024), but the trend is currently moving in the opposite direction — showing that formal commitments do not translate into improved outcomes without adequate resourcing of community-controlled early years services. The Early Years Learning Framework (Australian Government Department of Education, 2022) includes the practice principle of “cultural competence”, calling on educators to reflect on their own cultural assumptions rather than treat Aboriginal understandings as an additional topic.",
        "Settlement support for families in the Refugee and Humanitarian Program is delivered through the Humanitarian Settlement Program and the Settlement Engagement and Transition Support (SETS) program, with $226 million allocated over three years (Refugee Council of Australia, 2024); this funding does not flow directly to ECEC services, so partnership with community organisations is required but not guaranteed. The 2024 review of Australia's Multicultural Framework has also brought the accessibility of mainstream services like ECEC to CALD families into policy focus, rather than assuming English-language competency."
      ]
    },
    strategies: [
      "Engage in continuous critical reflection on cultural competence, treating it as an ongoing process of examining educators' cultural assumptions and biases rather than a single training session (Australian Government Department of Education, 2022).",
      "Incorporate Aboriginal and Torres Strait Islander voice into the curriculum in an authentic and consistent way, not generically or tokenistically, through Acknowledgement of Country, local language, art and stories developed in partnership with local Aboriginal communities.",
      "Collaborate with bilingual educators, cultural brokers, and accredited interpreters, so that communication with CALD families does not rely on children.",
      "Deliver a culturally responsive, strengths-based curriculum that includes multiple languages, foods, celebrations, and family structures in daily activities, linking the child's home macrosystem to the service environment, as described by Bronfenbrenner (1979).",
      "Apply trauma-informed practice with refugee-background children, including predictable routines, non-verbal calming strategies, and sensitivity to topics that might arise spontaneously in play, such as war, loss, and displacement."
    ],
    partnerships: [
      {
        name: "SNAICC — National Voice for our Children",
        description: "The national peak body for Aboriginal and Torres Strait Islander children; supports culturally safe practice and connection to local Aboriginal Community Controlled Organisations.",
        websiteUrl: "https://www.snaicc.org.au/"
      },
      {
        name: "AIATSIS (Australian Institute of Aboriginal and Torres Strait Islander Studies)",
        description: "A trusted source of cultural, historical and educational resources for including First Nations perspectives.",
        websiteUrl: "https://aiatsis.gov.au/"
      },
      {
        name: "Settlement Services International (SSI)",
        description: "Provides settlement services, including early years services, to refugee and migrant families.",
        websiteUrl: "https://www.ssi.org.au/"
      },
      {
        name: "AMES Australia",
        description: "Provides settlement, English-language and family support services for newly arrived migrant and refugee communities.",
        websiteUrl: "https://www.ames.net.au/"
      },
      {
        name: "Refugee Council of Australia",
        description: "The national peak body for refugee policy advocacy, and a source of information on the refugee sector relevant to services supporting refugee-background families.",
        websiteUrl: "https://www.refugeecouncil.org.au/"
      }
    ],
    resources: {
      programs: [
        { name: "Early Childhood Australia – Educators' Guide to the EYLF (Cultural Competence)", url: "https://www.earlychildhoodaustralia.org.au/" },
        { name: "SNAICC Resources for Early Childhood Services", url: "https://www.snaicc.org.au/resources/" },
        { name: "Racism. It Stops With Me – Early Childhood Resources", url: "https://itstopswithme.humanrights.gov.au/" },
        { name: "Multicultural Australia – Settlement and Community Resources", url: "https://multiculturalaustralia.org.au/" }
      ],
      storybooks: [
        { title: "Welcome to Country", author: "Aunty Joy Murphy and Lisa Kennedy" },
        { title: "Somewhere Else", author: "Gus Gordon" },
        { title: "My Two Blankets", author: "Irena Kobald and Freya Blackwood" },
        { title: "Family Tree", author: "Josh Pyke and Ronojoy Ghosh" }
      ],
      media: [
        {
          title: "Little J & Big Cuz",
          platform: "NITV/ABC",
          description: "First Nations characters and everyday cultural experiences for young children",
          url: "https://www.littlejandbigcuz.com.au/"
        },
        {
          title: "Move It Mob Style",
          platform: "NITV",
          description: "Aboriginal dance and language program that builds pride in culture and identity",
          url: "https://www.nitv.org.au/"
        },
        {
          title: "Waabiny Time",
          platform: "NITV",
          description: "Noongar-language children's program supporting language revitalisation",
          url: "https://www.noongarradio.org.au/"
        },
        {
          title: "SBS Kids",
          platform: "SBS",
          description: "Multilingual children's content supporting home-language maintenance for CALD families",
          url: "https://www.sbs.com.au/kids"
        }
      ],
      pedagogicalSynthesis: "These resources support children to see their own cultural identity reflected and valued in early learning settings, while inviting all children to build curiosity, respect, and empathy for cultures different from their own."
    }
  },
  {
    id: 'health',
    title: 'Health and Wellbeing Contexts',
    subtitle: 'Parental Mental Illness, Substance Use, Trauma, Grief, and Abuse',
    category: 'Context 4',
    badgeColor: 'rose',
    iconName: 'HeartPulse',
    imageUrl: 'https://images.unsplash.com/photo-1587323655395-b1c77a12c89a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYXklMjBzY2hvb2x8ZW58MHx8MHx8fDA%3D',
    imageAlt: 'Active play supporting physical and emotional wellbeing in early learning settings.',
    understanding: {
      paragraphs: [
        "Early childhood literature typically frames health and wellbeing issues as four distinct categories: parental mental illness, substance use, trauma and grief, and abuse. This separation is analytically convenient but empirically weak, since these factors frequently co-occur and share a common mechanism of harm — chronic disruption of the child's stress-regulation system (Perry, 2009). Treating them separately risks four superficial overviews instead of one coherent account of their shared developmental significance.",
        "Two lenses dominate this context: toxic stress theory (National Scientific Council on the Developing Child, 2005) and attachment theory (Bowlby, 1969). Combined, they risk over-determinism: not all children of parents with mental illness or substance dependence experience poor outcomes, and a stable second caregiver or early intervention can substantially mitigate risk (Reupert & Maybery, 2016). A deficit-based reading — parent unwell, therefore child harmed — is both empirically inaccurate and counterproductive, risking exactly the stigmatising, surveillance-like response parents fear. The more defensible position is that risk exists but is mediated by protective factors, and services should be built around strengthening those factors rather than identifying risk."
      ]
    },
    impact: {
      paragraphs: [
        "The most important figure here is not prevalence but service design mismatch. Emotional abuse, which includes exposure to family violence, was the most common substantiated type of maltreatment among Australian children in 2023–24, accounting for 57% of the 42,100 children with substantiated maltreatment, compared with neglect (21%) (Australian Institute of Health and Welfare, 2025a). Yet child protection statistics still cannot distinguish children affected by family violence from those affected by other forms of emotional abuse (Australian Institute of Health and Welfare, 2025a), meaning the single most common cause of substantiated harm is not visible in national data as its own category — a real constraint on tailoring practice responses.",
        "Figures for parental mental illness (around 16% of parents reporting poor mental health) and for children living with an affected parent (around 1 in 5) come from the 2016–17 AIHW collection (Australian Institute of Health and Welfare, 2022) and are now almost a decade old. These likely underestimate current prevalence given the clear rise in mental health service demand since COVID-19 — a data-currency issue the sector has not addressed, and a caution against relying too heavily on any single figure here."
      ]
    },
    policy: {
      paragraphs: [
        "The National Children's Mental Health and Wellbeing Strategy usefully recommends better integration between adult mental health and substance use services and services for children (National Mental Health Commission, 2021), but reveals a structural gap: the “child lens” is not built into adult service design and is instead left to individual clinician practice. The National Plan to End Violence against Women and Children 2022–2032 reframes children from witness to victim-survivor, significant for entitlement to support, though this language shift does not automatically create more counselling or refuge places. Also notable is the phasing out of the dedicated COPMI initiative in favour of the broader Emerging Minds workforce centre (COPMI, n.d.) — a generalist approach that may have greater reach but less of the specialist depth the original initiative provided."
      ]
    },
    strategies: [
      "Treat trauma-informed practice as a routine, not a one-off training session — reading dysregulated behaviours as a stress reaction rather than only after a disclosure.",
      "Provide a deliberate buffering strategy through a stable key-person relationship, which is not only good pedagogy but also evidence-based, as demonstrated by Bowlby (1969).",
      "Avoid a surveillance framing of family engagement, as a punitive-feeling process will discourage families from disclosing and seeking help.",
      "Collaborate with adult mental health and drug and alcohol services, helping to close the “child lens” gap that is currently left to individual clinician discretion.",
      "Make early, proportionate referrals before a family reaches statutory thresholds for child protection involvement."
    ],
    partnerships: [
      {
        name: "Emerging Minds",
        description: "The national workforce centre for child mental health.",
        websiteUrl: "https://emergingminds.com.au/"
      },
      {
        name: "Beyond Blue",
        description: "Provides mental health information, including on perinatal and parental mental health.",
        websiteUrl: "https://www.beyondblue.org.au/"
      },
      {
        name: "Family Drug Support Australia",
        description: "Supports families affected by alcohol and other drug use.",
        websiteUrl: "https://www.fds.org.au/"
      },
      {
        name: "1800RESPECT",
        description: "Provides domestic, family and sexual violence counselling and referral.",
        websiteUrl: "https://www.1800respect.org.au/"
      },
      {
        name: "Child and family health nurses / GPs",
        description: "The first point of contact for identifying and referring affected families."
      }
    ],
    resources: {
      programs: [
        { name: "Emerging Minds", url: "https://emergingminds.com.au/" },
        { name: "COPMI – Children of Parents with a Mental Illness", url: "https://www.copmi.net.au/" },
        { name: "Be You – mental health in early learning", url: "https://beyou.edu.au/" },
        { name: "Family Drug Support Australia", url: "https://www.fds.org.au/" }
      ],
      storybooks: [
        { title: "The Rabbit Listened", author: "Cori Doerrfeld" },
        { title: "When Sadness Comes to Call", author: "Eva Eland" },
        { title: "Something Is Wrong at My House", author: "Diane Davis" },
        { title: "The Huge Bag of Worries", author: "Virginia Ironside" }
      ],
      media: [
        {
          title: "Cosmic Kids Yoga",
          platform: "YouTube",
          description: "Mindfulness and movement-based videos that help children build a sense of calm and co-regulate strong emotions",
          url: "https://www.cosmickids.com/"
        },
        {
          title: "Circle Round",
          platform: "WBUR",
          description: "A folktale podcast that gently helps children process big feelings and family change through storytelling",
          url: "https://www.wbur.org/circleround"
        },
        {
          title: "But Why: A Podcast for Curious Kids",
          platform: "Vermont Public",
          description: "Answers children's real questions, including about grief and loss, in an age-appropriate way",
          url: "https://www.vermontpublic.org/but-why"
        },
        {
          title: "GoNoodle",
          platform: "YouTube/app",
          description: "Short movement breaks that help children self-regulate after distress",
          url: "https://www.gonoodle.com/"
        }
      ],
      pedagogicalSynthesis: "These resources give children accessible, non-threatening ways to name and manage big feelings, supporting emotional regulation and helping normalise seeking comfort and support during difficult family circumstances."
    }
  },
  {
    id: 'crisis',
    title: 'Crisis and Emergency Contexts',
    subtitle: 'Climate Disaster, Family Violence, and Displacement',
    category: 'Context 5',
    badgeColor: 'purple',
    iconName: 'ShieldAlert',
    imageUrl: 'https://images.unsplash.com/photo-1624638760852-8ede1666ab07?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZpcnN0JTIwYWlkJTIwYm94JTIwa2lkfGVufDB8fDB8fHww',
    imageAlt: 'First aid and emergency preparedness for children in early childhood settings.',
    understanding: {
      paragraphs: [
        "Early childhood literature often portrays crisis and emergency situations as discrete “events” — climate and natural disasters, family violence, displacement. This framing needs examining: many Australian children live amid crises created by overlapping systemic failures — under-investment in disaster-resilient housing, a critical lack of family violence refuge capacity, and a housing market that fails displaced families. Viewing these as separate emergencies obscures the root cause: households with the fewest financial and social resources are consistently the least prepared to cope with, or recover from, disruption (Fothergill & Peek, 2004).",
        "Toxic stress and trauma theory (National Scientific Council on the Developing Child, 2005; Perry, 2009) is the prevailing developmental perspective, explaining why acute crisis exposure can have the same impact as chronic adversity when a child's caregiving environment is also destabilised. This lens is useful but limited, showing how an individual child may be harmed while offering little insight into why some communities face repeated crises and others do not. A structural vulnerability framework adds an important dimension, framing disaster and displacement impacts as a function of pre-existing inequality — housing precarity, income, geographic location — rather than random misfortune: the same “natural” disaster has very different consequences depending on a family's prior material buffer."
      ]
    },
    impact: {
      paragraphs: [
        "The data show these contexts becoming increasingly interconnected rather than separate. Family and domestic violence is now the largest driver of demand for specialist homelessness services, with 29% of all clients single parents with children (Australian Institute of Health and Welfare, 2025b). In 2022–23, over 76,000 children accessed homelessness services, more than 16,000 unaccompanied, many escaping violence, abuse or neglect at home, while a further 19,833 children were unable to access services at all due to capacity constraints (Homelessness Australia, 2024). This last figure matters most: many families are affected not by the absence of a support pathway, but by the lack of funded capacity within it — a resourcing problem, not a service design problem.",
        "A climate disaster displacement layer adds further complexity: around 23,000 Australians are displaced annually by floods, bushfires and cyclones, against an estimated shortage of 640,000 affordable homes (Homelessness Australia, 2025). The relationship is telling: disaster recovery can worsen housing stress for already vulnerable nearby families, as reconstruction pushes up rents and displaced families compete for emergency housing with those already experiencing homelessness. The cumulative effect is a parenting context in which even a stable, available parent may face acute material and psychological distress, reducing the buffer against a child's own distress response."
      ]
    },
    policy: {
      paragraphs: [
        "The National Plan to End Violence against Women and Children 2022–2032 explicitly acknowledges children as victim-survivors of family violence rather than passive witnesses — a positive policy shift — yet ongoing data on children turned away from homelessness services suggests recognition is now outpacing funded capacity. Similarly, the National Agreement on Social Housing and Homelessness (in effect from 1 July 2024) sets outcome measures for reducing homelessness, but the number of specialist homelessness clients affected by family and domestic violence has risen in absolute terms even as their proportion of the overall client base has slightly decreased (Australian Institute of Health and Welfare, 2025b) — reflecting a shift in client composition rather than a genuine decline in affected families. Findings on ‘secondary crises’, where disaster recovery activity displaces already housing-insecure residents, reveal a real gap: disaster response planning is not yet well integrated with homelessness and housing policy, despite the two clearly interacting in practice (Homelessness Australia, 2025)."
      ]
    },
    strategies: [
      "Offer flexible, crisis-focused family enrolment that removes housing stability assumptions, such as fixed enrolment dates and rigid documentation requirements.",
      "Plan for emergency preparedness that specifically considers the needs of the youngest children, with evacuation and continuity planning that addresses the needs of infants and toddlers as well as older children.",
      "Build active, direct referral relationships with family violence and homelessness services, so a disclosure or crisis does not leave a family having to navigate a new system alone.",
      "Provide consistency as a stabilising intervention, recognising that the service may be one of the few consistent things in a child's week during a family crisis.",
      "Advocate for adequate sector funding, with services and peak bodies reporting on unmet demand (as the “children turned away” data does) to support investment in crisis services."
    ],
    partnerships: [
      {
        name: "1800RESPECT",
        description: "The national domestic, family and sexual violence counselling and referral service.",
        websiteUrl: "https://www.1800respect.org.au/"
      },
      {
        name: "Homelessness Australia",
        description: "The national peak body for homelessness, and a source of current data and service-system advocacy.",
        websiteUrl: "https://homelessnessaustralia.org.au/"
      },
      {
        name: "Local specialist homelessness services (SHS)",
        description: "A direct referral pathway for families experiencing housing crisis."
      },
      {
        name: "State and territory emergency management and recovery agencies",
        description: "Coordination points during and after climate disaster events."
      },
      {
        name: "Red Cross Australia",
        description: "Provides emergency relief, disaster recovery support, and family reunification services.",
        websiteUrl: "https://www.redcross.org.au/"
      }
    ],
    resources: {
      programs: [
        { name: "1800RESPECT", url: "https://www.1800respect.org.au/" },
        { name: "Homelessness Australia – Child Homelessness Snapshot", url: "https://homelessnessaustralia.org.au/" },
        { name: "Emergency Management Australia – children and disasters resources", url: "https://www.aidr.org.au/" },
        { name: "Red Cross Australia – emergency and recovery resources", url: "https://www.redcross.org.au/" }
      ],
      storybooks: [
        { title: "The Storm Whale", author: "Benji Davies" },
        { title: "My Forever Dress", author: "Suzanne Nicholson (Wongi/Wangkatha)" },
        { title: "A Bushfire Alphabet", author: "Kate Gordon" },
        { title: "A Terrible Thing Happened", author: "Margaret M. Holmes" }
      ],
      media: [
        {
          title: "Molly of Denali",
          platform: "PBS/NITV",
          description: "Indigenous-led series modelling community resilience through hardship",
          url: "https://www.sbs.com.au/nitv/"
        },
        {
          title: "Hey Duggee",
          platform: "BBC",
          description: "Gentle, low-stakes stories about problem-solving and resilience",
          url: "https://www.bbc.co.uk/cbeebies/shows/hey-duggee"
        },
        {
          title: "Imagine This",
          platform: "ABC Kids Listen podcast",
          description: "Calming audio storytelling suited to temporary or unstable housing situations",
          url: "https://www.abc.net.au/kidslisten/"
        },
        {
          title: "Fireman Sam",
          platform: "BBC/Cartoon",
          description: "Reassuring emergency-service storylines that introduce young children to safety, response and recovery themes",
          url: "https://www.firemansam.com/"
        }
      ],
      pedagogicalSynthesis: "These resources help children build a sense of safety and predictability during unsettling events, offering reassurance that both feelings and circumstances can be navigated with the support of trusted adults."
    }
  }
];

export const REFERENCES_DATA: ReferenceItem[] = [
  {
    id: "ref-1",
    apaFormatted: "Australian Bureau of Statistics. (2025). Marriages and divorces, Australia, 2024. https://www.abs.gov.au/statistics/people/people-and-communities/marriages-and-divorces-australia/latest-release",
    url: "https://www.abs.gov.au/statistics/people/people-and-communities/marriages-and-divorces-australia/latest-release"
  },
  {
    id: "ref-2",
    apaFormatted: "Australian Council of Social Service, & UNSW Sydney. (2025). Poverty in Australia 2025: Overview. https://povertyandinequality.acoss.org.au/poverty_in_australia_2025_overview/",
    url: "https://povertyandinequality.acoss.org.au/poverty_in_australia_2025_overview/"
  },
  {
    id: "ref-3",
    apaFormatted: "Australian Government. (2022). National Plan to End Violence against Women and Children 2022–2032. Department of Social Services. https://www.dss.gov.au/",
    url: "https://www.dss.gov.au/"
  },
  {
    id: "ref-4",
    apaFormatted: "Australian Government Department of Education. (2022). Belonging, being and becoming: The Early Years Learning Framework for Australia (V2.0). https://www.education.gov.au/early-childhood/early-childhood-education-and-care-eyfl",
    url: "https://www.education.gov.au/early-childhood/early-childhood-education-and-care-eyfl"
  },
  {
    id: "ref-5",
    apaFormatted: "Australian Government Department of Education. (2024). Early Years Strategy. https://www.education.gov.au/early-childhood/about/strategy-and-evaluation/early-years-strategy",
    url: "https://www.education.gov.au/early-childhood/about/strategy-and-evaluation/early-years-strategy"
  },
  {
    id: "ref-6",
    apaFormatted: "Australian Government Department of Education. (2025). Australian Early Development Census: National Report 2024. https://www.aedc.gov.au/",
    url: "https://www.aedc.gov.au/"
  },
  {
    id: "ref-7",
    apaFormatted: "Australian Government Department of Social Services. (2021). Safe and Supported: The National Framework for Protecting Australia's Children 2021–2031. https://www.dss.gov.au/child-protection/resource/national-framework-protecting-australias-children-2021-2031",
    url: "https://www.dss.gov.au/child-protection/resource/national-framework-protecting-australias-children-2021-2031"
  },
  {
    id: "ref-8",
    apaFormatted: "Australian Government Department of Social Services. (2024). Early Years Strategy 2024–2034. https://www.dss.gov.au/early-years-strategy",
    url: "https://www.dss.gov.au/early-years-strategy"
  },
  {
    id: "ref-9",
    apaFormatted: "Australian Institute of Health and Welfare. (2022). Australia's children: Parental health and disability. https://www.aihw.gov.au/reports/children-youth/australias-children/contents/social-support/parental-health-disability",
    url: "https://www.aihw.gov.au/reports/children-youth/australias-children/contents/social-support/parental-health-disability"
  },
  {
    id: "ref-10",
    apaFormatted: "Australian Institute of Health and Welfare. (2025a). Child protection Australia 2023–24. Australian Government. https://www.aihw.gov.au/reports/child-protection/child-protection-australia-2023-24",
    url: "https://www.aihw.gov.au/reports/child-protection/child-protection-australia-2023-24"
  },
  {
    id: "ref-11",
    apaFormatted: "Australian Institute of Health and Welfare. (2025b). Homelessness and homelessness services. https://www.aihw.gov.au/reports/australias-welfare/homelessness-and-homelessness-services",
    url: "https://www.aihw.gov.au/reports/australias-welfare/homelessness-and-homelessness-services"
  },
  {
    id: "ref-12",
    apaFormatted: "Berry, J. W. (2005). Acculturation: Living successfully in two cultures. International Journal of Intercultural Relations, 29(6), 697–712."
  },
  {
    id: "ref-13",
    apaFormatted: "Bourdieu, P. (1986). The forms of capital. In J. Richardson (Ed.), Handbook of theory and research for the sociology of education (pp. 241–258). Greenwood."
  },
  {
    id: "ref-14",
    apaFormatted: "Bowlby, J. (1969). Attachment and loss: Vol. 1. Attachment. Basic Books."
  },
  {
    id: "ref-15",
    apaFormatted: "Bronfenbrenner, U. (1979). The ecology of human development: Experiments by nature and design. Harvard University Press."
  },
  {
    id: "ref-16",
    apaFormatted: "Closing the Gap. (2024). Outcome area 4: Aboriginal and Torres Strait Islander children thrive in their early years. Productivity Commission. https://www.pc.gov.au/closing-the-gap-data/dashboard/outcome-area/children-thriving/",
    url: "https://www.pc.gov.au/closing-the-gap-data/dashboard/outcome-area/children-thriving/"
  },
  {
    id: "ref-17",
    apaFormatted: "Conger, R. D., & Elder, G. H. (1994). Families in troubled times: Adapting to change in rural America. Aldine de Gruyter."
  },
  {
    id: "ref-18",
    apaFormatted: "COPMI. (n.d.). Why COPMI? Children of Parents with a Mental Illness. https://www.copmi.net.au/professionals-organisations/how-to-help/why-copmi/",
    url: "https://www.copmi.net.au/professionals-organisations/how-to-help/why-copmi/"
  },
  {
    id: "ref-19",
    apaFormatted: "Fothergill, A., & Peek, L. A. (2004). Poverty and disasters in the United States: A review of recent sociological findings. Natural Hazards, 32(1), 89–110."
  },
  {
    id: "ref-20",
    apaFormatted: "Grace, R., Bowes, J., & Woodrow, C. (2022). Children, families and communities (6th ed.). Oxford University Press Australia & New Zealand."
  },
  {
    id: "ref-21",
    apaFormatted: "Homelessness Australia. (2024). 2024 child homelessness snapshot. https://homelessnessaustralia.org.au/",
    url: "https://homelessnessaustralia.org.au/"
  },
  {
    id: "ref-22",
    apaFormatted: "Homelessness Australia. (2025). Climate and housing crises converging to threaten Australian families. https://homelessnessaustralia.org.au/",
    url: "https://homelessnessaustralia.org.au/"
  },
  {
    id: "ref-23",
    apaFormatted: "Martin, K. (2008). Please knock before you enter: Aboriginal regulation of outsiders and the implications for researchers. Post Pressed."
  },
  {
    id: "ref-24",
    apaFormatted: "Minuchin, S. (1974). Families and family therapy. Harvard University Press."
  },
  {
    id: "ref-25",
    apaFormatted: "National Mental Health Commission. (2021). National Children's Mental Health and Wellbeing Strategy. Australian Government. https://www.mentalhealthcommission.gov.au/",
    url: "https://www.mentalhealthcommission.gov.au/"
  },
  {
    id: "ref-26",
    apaFormatted: "National Scientific Council on the Developing Child. (2005). Excessive stress disrupts the architecture of the developing brain (Working Paper No. 3). Harvard University Center on the Developing Child."
  },
  {
    id: "ref-27",
    apaFormatted: "OECD. (2025). Reducing inequalities by investing in early childhood education and care: Australia country note. OECD Publishing. https://www.oecd.org/content/dam/oecd/en/publications/support-materials/2025/01/reducing-inequalities-by-investing-in-early-childhood-education-and-care_a0fd3f31/Australia%20Country%20Note%20PDFO.pdf",
    url: "https://www.oecd.org/content/dam/oecd/en/publications/support-materials/2025/01/reducing-inequalities-by-investing-in-early-childhood-education-and-care_a0fd3f31/Australia%20Country%20Note%20PDFO.pdf"
  },
  {
    id: "ref-28",
    apaFormatted: "Perry, B. D. (2009). Examining child maltreatment through a neurodevelopmental lens: Clinical applications of the neurosequential model of therapeutics. Journal of Loss and Trauma, 14(4), 240–255."
  },
  {
    id: "ref-29",
    apaFormatted: "Productivity Commission. (2025). Closing the Gap information repository: Outcome area 4 — Aboriginal and Torres Strait Islander children thrive in their early years. https://www.pc.gov.au/closing-the-gap-data/dashboard/outcome-area/children-thriving/",
    url: "https://www.pc.gov.au/closing-the-gap-data/dashboard/outcome-area/children-thriving/"
  },
  {
    id: "ref-30",
    apaFormatted: "Putnam, R. D. (2000). Bowling alone: The collapse and revival of American community. Simon & Schuster."
  },
  {
    id: "ref-31",
    apaFormatted: "Refugee Council of Australia. (2024). The 2024–25 Federal Budget: What it means for refugees and people seeking humanitarian protection. https://www.refugeecouncil.org.au/",
    url: "https://www.refugeecouncil.org.au/"
  },
  {
    id: "ref-32",
    apaFormatted: "Refugee Council of Australia. (2025). Australia's Humanitarian Program 2025–26 discussion paper response. https://www.refugeecouncil.org.au/",
    url: "https://www.refugeecouncil.org.au/"
  },
  {
    id: "ref-33",
    apaFormatted: "Reupert, A., & Maybery, D. (2016). What do we know about families where parents have a mental illness? A systematic review. Child & Youth Services, 37(2), 98–111."
  },
  {
    id: "ref-34",
    apaFormatted: "Unsplash. (2026). Child nutrition, food security and mealtime inclusion in educational settings [Photograph]. https://images.unsplash.com/photo-1588075592765-2feb7de1f86d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Nob29sJTIwa2lkJTIwZWF0aW5nfGVufDB8fDB8fHww",
    url: "https://images.unsplash.com/photo-1588075592765-2feb7de1f86d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Nob29sJTIwa2lkJTIwZWF0aW5nfGVufDB8fDB8fHww"
  },
  {
    id: "ref-35",
    apaFormatted: "Unsplash. (2026). Inclusive play and material resource sharing among young children in ECEC [Photograph]. https://images.unsplash.com/photo-1609051968500-82562b2c2b54?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNoaWxkcmVuJTIwc2hhcmluZyUyMHRveXN8ZW58MHx8MHx8fDA%3D",
    url: "https://images.unsplash.com/photo-1609051968500-82562b2c2b54?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNoaWxkcmVuJTIwc2hhcmluZyUyMHRveXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: "ref-36",
    apaFormatted: "Unsplash. (2026). Relational comfort, secure attachment and responsive educator-child interaction [Photograph]. https://images.unsplash.com/photo-1587235587172-f05eee42fdac?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNvbWZvcnRpbmclMjBhJTIwY2hpbGQlMjIlMjBvciUyMCUyMnRlYWNoZXIlMjB0YWxraW5nJTIwdG8lMjB0b2RkbGVyfGVufDB8fDB8fHww",
    url: "https://images.unsplash.com/photo-1587235587172-f05eee42fdac?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNvbWZvcnRpbmclMjBhJTIwY2hpbGQlMjIlMjBvciUyMCUyMnRlYWNoZXIlMjB0YWxraW5nJTIwdG8lMjB0b2RkbGVyfGVufDB8fDB8fHww"
  },
  {
    id: "ref-37",
    apaFormatted: "Unsplash. (2026). Culturally diverse family and educator collaborative partnership in early childhood education [Photograph]. https://images.unsplash.com/photo-1563457039413-0c39b8e8963d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjYzfHxkaXZlcnNlJTIwcGFyZW50JTIwZWR1Y2F0b3IlMjBtZWV0aW5nfGVufDB8fDB8fHww",
    url: "https://images.unsplash.com/photo-1563457039413-0c39b8e8963d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjYzfHxkaXZlcnNlJTIwcGFyZW50JTIwZWR1Y2F0b3IlMjBtZWV0aW5nfGVufDB8fDB8fHww"
  },
  {
    id: "ref-38",
    apaFormatted: "Unsplash. (2026). Active outdoor play supporting physical and emotional wellbeing in early learning settings [Photograph]. https://images.unsplash.com/photo-1587323655395-b1c77a12c89a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYXklMjBzY2hvb2x8ZW58MHx8MHx8fDA%3D",
    url: "https://images.unsplash.com/photo-1587323655395-b1c77a12c89a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYXklMjBzY2hvb2x8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: "ref-39",
    apaFormatted: "Unsplash. (2026). First aid and emergency preparedness for children in early childhood settings [Photograph]. https://images.unsplash.com/photo-1624638760852-8ede1666ab07?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZpcnN0JTIwYWlkJTIwYm94JTIwa2lkfGVufDB8fDB8fHww",
    url: "https://images.unsplash.com/photo-1624638760852-8ede1666ab07?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZpcnN0JTIwYWlkJTIwYm94JTIwa2lkfGVufDB8fDB8fHww"
  },
  {
    "id": "ref-40",
    "apaFormatted": "Generative AI bibiliography: OpenAI. (2026). ChatGPT (GPT-5.6 Luna) [Large language model]. https://chatgpt.com/share/6a841e57-6ce0-83ec-96b3-0dbc322e955f. ChatGPT (OpenAI, 2026) was used to support brainstorming, language refinement, and clarification of ideas. The final content was reviewed, edited, and verified by me.",
    "url": "https://chatgpt.com/share/6a841e57-6ce0-83ec-96b3-0dbc322e955f"
  }
];
