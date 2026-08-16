import { Flashcard, Category } from '../types';

export const FLASHCARDS_DATA: Flashcard[] = [
  {
    id: 'card-1',
    tag: 'VERBATIM',
    category: 'Cellular Adaptations',
    question: 'In chronic smokers the most common cellular adaptation that happens in their respiratory tract is :',
    options: [
      { key: 'A', text: 'columnar metaplasia' },
      { key: 'B', text: 'squamous metaplasia' },
      { key: 'C', text: 'squamous hyperplasia' },
      { key: 'D', text: 'columnar hyperplasia' }
    ],
    correctKeys: ['B'],
    answerDisplay: 'B. squamous metaplasia',
    highYieldExplanation: 'Chronic irritation from cigarette smoke induces a phenotypic change where the normal pseudostratified ciliated columnar epithelium of the respiratory tract is replaced by stratified squamous epithelium [1]. This is a survival mechanism as squamous cells are more resilient to the harmful effects of smoke, though it results in loss of mucus secretion and ciliary clearance [1].',
    whyOthersWrong: [
      { option: 'A. columnar metaplasia', explanation: "This is the opposite adaptation, typically seen in the lower esophagus (Barrett's esophagus) in response to chronic acid reflux." },
      { option: 'C. squamous hyperplasia', explanation: 'Hyperplasia is an increase in the number of cells of the existing cell type, not a change from one mature cell type to another [1].' },
      { option: 'D. columnar hyperplasia', explanation: 'Columnar cells do not undergo protective hyperplasia in response to the chronic noxious stimuli of cigarette smoke.' }
    ],
    commonTrap: 'Students often confuse the starting cell type (columnar) with the newly adapted cell type (squamous) and mistakenly select columnar metaplasia instead of squamous metaplasia.'
  },
  {
    id: 'card-2',
    tag: 'VERBATIM',
    category: 'Cellular Adaptations',
    question: 'In a chronic hypertensive patient which of the following adaptation is expected in his left ventricle?',
    options: [
      { key: 'A', text: 'Hypertrophy' },
      { key: 'B', text: 'Hyperplasia' },
      { key: 'C', text: 'Atrophy' },
      { key: 'D', text: 'Metaplasia' }
    ],
    correctKeys: ['A'],
    answerDisplay: 'A. Hypertrophy',
    highYieldExplanation: 'Chronic hypertension increases the afterload on the left ventricle. Since adult cardiomyocytes are permanent cells and cannot undergo mitotic division, they adapt to the increased workload by increasing in size (hypertrophy) rather than number [1].',
    whyOthersWrong: [
      { option: 'B. Hyperplasia', explanation: 'Adult cardiac muscle cells are permanent and cannot divide; therefore, hyperplasia does not occur in adult myocardium [1].' },
      { option: 'C. Atrophy', explanation: 'Atrophy is a decrease in cell size and number, which occurs with decreased workload or loss of trophic stimulation, not increased load [1].' },
      { option: 'D. Metaplasia', explanation: 'Metaplasia is a change from one adult cell type to another, which is not a feature of adult cardiac muscle tissue undergoing mechanical stress [1].' }
    ],
    commonTrap: 'Students may confuse hyperplasia with hypertrophy, assuming that any increase in tissue mass must involve cell division.'
  },
  {
    id: 'card-3',
    tag: 'VERBATIM',
    category: 'Cellular Adaptations',
    question: 'All of the following are labile tissues except ?',
    options: [
      { key: 'A', text: 'Skin' },
      { key: 'B', text: 'Bone marrow' },
      { key: 'C', text: 'GIT' },
      { key: 'D', text: 'Skeletal muscle' }
    ],
    correctKeys: ['D'],
    answerDisplay: 'D. Skeletal muscle',
    highYieldExplanation: 'Labile tissues consist of cells that continuously divide and regenerate throughout life to replace lost cells (e.g., epithelia of skin, gastrointestinal tract, and hematopoiesis in bone marrow) [1]. Skeletal muscle consists of permanent cells that have extremely limited regenerative capacity and adapt primarily via hypertrophy [1].',
    whyOthersWrong: [
      { option: 'A. Skin', explanation: 'The epidermis consists of stratified squamous epithelium that continuously regenerates, classifying it as a labile tissue [1].' },
      { option: 'B. Bone marrow', explanation: 'Hematopoietic tissue in the bone marrow continuously proliferates to replace blood cells, classifying it as a labile tissue [1].' },
      { option: 'C. GIT', explanation: 'The mucosal lining of the gastrointestinal tract has a very high cell turnover rate and continuously regenerates, classifying it as a labile tissue [1].' }
    ],
    commonTrap: 'Students sometimes assume that complex internal organ linings like the GIT are stable tissues rather than continuously dividing labile tissues.'
  },
  {
    id: 'card-4',
    tag: 'VERBATIM',
    category: 'Cellular Adaptations',
    question: 'All cell adaptations are Pathological',
    options: [
      { key: 'A', text: 'True' },
      { key: 'B', text: 'False' }
    ],
    correctKeys: ['B'],
    answerDisplay: 'B. False',
    highYieldExplanation: 'Cellular adaptations can be either physiological (normal responses to hormones or increased functional demand, like uterine hypertrophy in pregnancy or skeletal muscle hypertrophy in athletes) or pathological (responses to stress that allow cells to escape injury at the cost of normal function) [1].',
    whyOthersWrong: [
      { option: 'A. True', explanation: 'This is incorrect because physiological adaptation is a normal, healthy tissue response rather than a disease-related process [1].' }
    ],
    commonTrap: 'Students often focus exclusively on disease states in pathology and overlook common physiological adaptations.'
  },
  {
    id: 'card-5',
    tag: 'VERBATIM',
    category: 'Cellular Adaptations',
    question: 'Calf muscle atrophy after femoral fracture immobilisation in cast is due to ?',
    options: [
      { key: 'A', text: 'Pressure atrophy' },
      { key: 'B', text: 'Denervation atrophy' },
      { key: 'C', text: 'Disuse atrophy' },
      { key: 'D', text: 'Inadequate nutrition' }
    ],
    correctKeys: ['C'],
    answerDisplay: 'C. Disuse atrophy',
    highYieldExplanation: 'Immobilization of a limb in a cast reduces mechanical load and muscular activity, triggering disuse atrophy [1]. This is characterized by decreased protein synthesis and increased protein degradation via the ubiquitin-proteasome pathway [1].',
    whyOthersWrong: [
      { option: 'A. Pressure atrophy', explanation: 'This is caused by physical compression of tissues (e.g., bedsores or tumor mass compression), not a lack of movement.' },
      { option: 'B. Denervation atrophy', explanation: 'This occurs when the nerve supply to a muscle is lost or damaged (e.g., spinal cord injury or peripheral nerve transection), not from external casting.' },
      { option: 'D. Inadequate nutrition', explanation: 'While profound malnutrition causes systemic muscle wasting, localized cast immobilization specifically causes disuse atrophy.' }
    ],
    commonTrap: 'Students may pick denervation atrophy, confusing the temporary lack of movement with a physical loss of nerve connectivity.'
  },
  {
    id: 'card-6',
    tag: 'VERBATIM',
    category: 'Cellular Adaptations',
    question: 'How does dysplasia differ from hyperplasia in terms of cell growth?',
    options: [
      { key: 'A', text: 'Dysplasia is a normal growth response.' },
      { key: 'B', text: 'Dysplasia involves abnormal growth and organization.' },
      { key: 'C', text: 'Dysplasia leads to apoptosis.' },
      { key: 'D', text: 'Dysplasia does not involve genetic changes.' }
    ],
    correctKeys: ['B'],
    answerDisplay: 'B. Dysplasia involves abnormal growth and organization.',
    highYieldExplanation: 'Dysplasia is characterized by disordered, abnormal cell growth and disorganization of tissue architecture, which can be precancerous [1]. Hyperplasia, by contrast, is an orderly increase in cell number without the same degree of cytological atypia or structural disorganization [1].',
    whyOthersWrong: [
      { option: 'A. Dysplasia is a normal growth response', explanation: 'Dysplasia is never normal; it is always pathological and represents abnormal growth and development.' },
      { option: 'C. Dysplasia leads to apoptosis', explanation: 'Dysplasia does not inherently lead to apoptosis; instead, dysplastic cells frequently acquire mutations that allow them to evade apoptosis and progress to neoplasia.' },
      { option: 'D. Dysplasia does not involve genetic changes', explanation: 'Dysplasia frequently involves accumulated genetic mutations that drive abnormal proliferation and cellular atypia.' }
    ],
    commonTrap: 'Students may select options suggesting dysplasia is harmless or benign, failing to recognize its role as a pre-cancerous lesion.'
  },
  {
    id: 'card-7',
    tag: 'VERBATIM',
    category: 'Cellular Adaptations',
    question: 'Which adaptive mechanism may allow cells to survive extreme conditions by digesting their own components?',
    options: [
      { key: 'A', text: 'Autophagy' },
      { key: 'B', text: 'Metaplasia' },
      { key: 'C', text: 'Hypertrophy' },
      { key: 'D', text: 'Apoptosis' }
    ],
    correctKeys: ['A'],
    answerDisplay: 'A. Autophagy',
    highYieldExplanation: 'Autophagy is a survival mechanism where cells degrade and recycle their own damaged or unnecessary components to generate energy and maintain essential metabolic functions during periods of extreme nutrient deprivation or stress [1].',
    whyOthersWrong: [
      { option: 'B. Metaplasia', explanation: 'This is a phenotypic change from one adult cell type to another, not an intracellular self-digestion survival mechanism [1].' },
      { option: 'C. Hypertrophy', explanation: 'This is an increase in cellular size, which requires anabolic protein synthesis rather than self-digestion [1].' },
      { option: 'D. Apoptosis', explanation: 'Apoptosis is programmed cell death, which is a pathway to elimination, not a catabolic survival mechanism [1].' }
    ],
    commonTrap: 'Students often mistake cell-directed destruction (autophagy) for programmed cell death (apoptosis), failing to recognize autophagy as primarily a survival response.'
  },
  {
    id: 'card-8',
    tag: 'GENERATED',
    category: 'Cellular Adaptations',
    question: 'Which of the following cellular adaptations is correctly paired with its primary descriptive characteristic?',
    options: [
      { key: 'A', text: 'Hypertrophy: Increase in cell number through division' },
      { key: 'B', text: 'Hyperplasia: Increase in cell size due to demand' },
      { key: 'C', text: 'Atrophy: Decrease in cell size or number' },
      { key: 'D', text: 'Metaplasia: Abnormal growth and organization of cells' }
    ],
    correctKeys: ['C'],
    answerDisplay: 'C. Atrophy: Decrease in cell size or number',
    highYieldExplanation: 'Atrophy is defined as a reduction in the size of an organ or tissue due to a decrease in cell size and/or cell number [1].',
    whyOthersWrong: [
      { option: 'A. Hypertrophy', explanation: 'This refers to an increase in cell size, not cell number [1].' },
      { option: 'B. Hyperplasia', explanation: 'This refers to an increase in cell number, not cell size [1].' },
      { option: 'D. Metaplasia', explanation: 'This refers to a reversible change from one adult cell type to another, whereas abnormal growth and organization describes dysplasia [1].' }
    ],
    commonTrap: 'Students frequently swap the definitions of hypertrophy and hyperplasia or mistake metaplasia for dysplasia.'
  },
  {
    id: 'card-9',
    tag: 'VERBATIM',
    category: 'Cell Injury & Hypoxia',
    question: 'Which of the following is a reversible type of cell injury?',
    options: [
      { key: 'A', text: 'Necrosis' },
      { key: 'B', text: 'Apoptosis' },
      { key: 'C', text: 'Swelling' },
      { key: 'D', text: 'Oxidative stress' }
    ],
    correctKeys: ['C'],
    answerDisplay: 'C. Swelling',
    highYieldExplanation: 'Cellular swelling (hydropic change) is a classic reversible response to cell injury [1]. It occurs when the cell fails to maintain ionic and fluid homeostasis due to a loss of ATP-dependent pump activity (like Na+/K+ ATPase), but the cell can recover if the noxious stimulus is removed [1].',
    whyOthersWrong: [
      { option: 'A. Necrosis', explanation: 'This is a form of cell death, which is inherently irreversible [1].' },
      { option: 'B. Apoptosis', explanation: 'This is programmed cell death, which is also irreversible [1].' },
      { option: 'D. Oxidative stress', explanation: 'While it causes cell damage, oxidative stress is an injury-causing mechanism rather than a pathologically defined reversible structural cellular change itself.' }
    ],
    commonTrap: 'Students may pick oxidative stress because it is not necessarily fatal to the cell, overlooking that cellular swelling is the classic pathologically classified reversible structural injury.'
  },
  {
    id: 'card-10',
    tag: 'VERBATIM',
    category: 'Cell Injury & Hypoxia',
    question: 'What causes oxidative stress in cells?',
    options: [
      { key: 'A', text: 'Excessive nutrient supply' },
      { key: 'B', text: 'Imbalance in reactive oxygen species production and detoxification' },
      { key: 'C', text: 'Inadequate blood flow' },
      { key: 'D', text: 'Normal metabolic processes' }
    ],
    correctKeys: ['B'],
    answerDisplay: 'B. Imbalance in reactive oxygen species production and detoxification',
    highYieldExplanation: 'Oxidative stress occurs when there is an excess of reactive oxygen species (ROS) and the cell is unable to detoxify them effectively [1]. This imbalance leads to cellular damage of lipids, proteins, and DNA [1].',
    whyOthersWrong: [
      { option: 'A. Excessive nutrient supply', explanation: 'This can alter metabolic rates but does not directly define or trigger the baseline biochemical state of oxidative stress.' },
      { option: 'C. Inadequate blood flow', explanation: 'This causes ischemia/hypoxia, which can lead to ROS generation (especially upon reperfusion), but is not the fundamental definition of oxidative stress itself.' },
      { option: 'D. Normal metabolic processes', explanation: 'Normal metabolism produces ROS, but under healthy conditions, they are successfully neutralized by antioxidants without producing oxidative stress [1].' }
    ],
    commonTrap: 'Students may select "normal metabolic processes" because they know mitochondria produce free radicals, forgetting that physiological antioxidant defenses prevent this from turning into "stress" under normal conditions.'
  },
  {
    id: 'card-11',
    tag: 'VERBATIM',
    category: 'Cell Injury & Hypoxia',
    question: 'What is autophagy primarily responsible for?',
    options: [
      { key: 'A', text: 'Cell death through necrosis' },
      { key: 'B', text: 'Breaking down and recycling damaged cellular components' },
      { key: 'C', text: 'Increasing protein synthesis' },
      { key: 'D', text: 'Releasing inflammatory signals' }
    ],
    correctKeys: ['B'],
    answerDisplay: 'B. Breaking down and recycling damaged cellular components',
    highYieldExplanation: 'Autophagy is an intracellular catabolic process where cells degrade and recycle their own damaged or unnecessary components (such as damaged organelles or protein aggregates) to aid in cellular maintenance and survival under stress [1].',
    whyOthersWrong: [
      { option: 'A. Cell death through necrosis', explanation: 'Necrosis is unregulated accidental cell death, whereas autophagy is a regulated survival pathway [1].' },
      { option: 'C. Increasing protein synthesis', explanation: 'Autophagy is a degradative, catabolic process rather than an anabolic synthetic process.' },
      { option: 'D. Releasing inflammatory signals', explanation: 'Autophagy generally acts to resolve cell stress and limit the release of pro-inflammatory signals by removing damaged organelles (like mitochondria) that would otherwise activate inflammasomes.' }
    ],
    commonTrap: 'Students sometimes associate "self-digestion" with necrosis or direct cellular destruction, failing to appreciate its role in cellular preservation and recycling.'
  },
  {
    id: 'card-12',
    tag: 'VERBATIM',
    category: 'Cell Injury & Hypoxia',
    question: 'Which factor can lead to hypoxic cell injury?',
    options: [
      { key: 'A', text: 'Excess oxygen availability' },
      { key: 'B', text: 'Nutrient imbalances' },
      { key: 'C', text: 'High altitude' },
      { key: 'D', text: 'Severe inflammation' }
    ],
    correctKeys: ['C'],
    answerDisplay: 'C. High altitude',
    highYieldExplanation: 'Hypoxia refers to deficient oxygen levels in tissues [1]. High altitude causes systemic hypoxia by reducing the partial pressure of inspired oxygen, which can lead to hypoxic cell injury if physiological adaptation fails [1].',
    whyOthersWrong: [
      { option: 'A. Excess oxygen availability', explanation: 'This leads to hyperoxia, which is associated with oxygen toxicity and oxidative stress, not hypoxia.' },
      { option: 'B. Nutrient imbalances', explanation: 'While harmful, nutritional deficiencies or excesses do not directly cause systemic oxygen deprivation at the tissue level.' },
      { option: 'D. Severe inflammation', explanation: 'While localized swelling can compress vessels, severe generalized inflammation is characterized primarily by cytokine-mediated effects and tissue injury, not as a direct primary cause of systemic hypoxic cell injury compared to high altitude.' }
    ],
    commonTrap: 'Students might select severe inflammation, thinking of local swelling-related perfusion issues, rather than recognizing high altitude as the classic physiological cause of systemic hypoxia.'
  },
  {
    id: 'card-13',
    tag: 'VERBATIM',
    category: 'Inflammation & Granulomas',
    question: 'All are chronic inflammatory cells except ?',
    options: [
      { key: 'A', text: 'Monocytes' },
      { key: 'B', text: 'Plasma cells' },
      { key: 'C', text: 'Neutrophils' },
      { key: 'D', text: 'Lymphocytes' }
    ],
    correctKeys: ['C'],
    answerDisplay: 'C. Neutrophils',
    highYieldExplanation: 'Neutrophils are the hallmark cells of acute inflammation, arriving rapidly at sites of injury [1]. Chronic inflammation, by contrast, is characterized by a mononuclear infiltrate containing monocytes/macrophages, lymphocytes, and plasma cells [1].',
    whyOthersWrong: [
      { option: 'A. Monocytes', explanation: 'These differentiate into macrophages and are key orchestrators of chronic inflammation [1].' },
      { option: 'B. Plasma cells', explanation: 'These are antibody-producing B-cells that are classic components of chronic inflammatory infiltrates [1].' },
      { option: 'D. Lymphocytes', explanation: 'T and B lymphocytes are key cellular mediators of chronic adaptive immunity and chronic inflammation [1].' }
    ],
    commonTrap: 'Students might confuse monocytes with neutrophils because both are phagocytes, failing to recall that neutrophils are acute responders whereas monocytes persist and predominate in chronic states.'
  },
  {
    id: 'card-14',
    tag: 'VERBATIM',
    category: 'Inflammation & Granulomas',
    question: 'which of the following plays an important role in granulomatous inflammation ?',
    options: [
      { key: 'A', text: 'IL 1' },
      { key: 'B', text: 'INF Y' },
      { key: 'C', text: 'IL 6' },
      { key: 'D', text: 'TNF' }
    ],
    correctKeys: ['B'],
    answerDisplay: 'B. INF Y',
    highYieldExplanation: 'Interferon-gamma (IFN-γ) is secreted by activated T cells (especially Th1 cells) and is crucial in granulomatous inflammation because it activates macrophages, transforming them into epithelioid histiocytes and multinucleated giant cells [1].',
    whyOthersWrong: [
      { option: 'A. IL 1', explanation: 'Interleukin-1 is a pro-inflammatory cytokine primarily involved in acute inflammation, fever induction, and acute-phase responses.' },
      { option: 'C. IL 6', explanation: 'Interleukin-6 is primarily involved in the acute-phase response, fever, and B-cell differentiation.' },
      { option: 'D. TNF', explanation: 'Tumor Necrosis Factor is important in granuloma maintenance, but IFN-γ is the primary driver of macrophage activation and differentiation into epithelioid cells in granulomatous inflammation. (Note: The quiz specifically identifies IFN-Y [INF Y] as the correct answer) [1].' }
    ],
    commonTrap: 'Students often confuse the role of TNF (which maintains the physical structure of a granuloma once formed) with IFN-γ (which acts as the primary activator of macrophages to form epithelioid cells).'
  },
  {
    id: 'card-15',
    tag: 'VERBATIM',
    category: 'Inflammation & Granulomas',
    question: 'Chronic inflammation can lead to malignancy.',
    options: [
      { key: 'A', text: 'True' },
      { key: 'B', text: 'False' }
    ],
    correctKeys: ['A'],
    answerDisplay: 'A. True',
    highYieldExplanation: 'Chronic inflammation provides a microenvironment rich in cytokines, reactive oxygen species, and persistent cellular proliferation (tissue repair), which can cause DNA damage and genomic instability, eventually driving neoplastic transformation (e.g., H. pylori chronic gastritis leading to gastric adenocarcinoma) [1].',
    whyOthersWrong: [
      { option: 'B. False', explanation: 'This is incorrect because persistent, long-standing chronic inflammatory states are well-established risk factors for tumor development [1].' }
    ],
    commonTrap: 'Students may think of inflammation as a purely defensive, benign immune process and overlook its ability to cause DNA damage and promote carcinogenesis over years.'
  },
  {
    id: 'card-16',
    tag: 'VERBATIM',
    category: 'Inflammation & Granulomas',
    question: 'All can be seen in Granuloma except?',
    options: [
      { key: 'A', text: 'Epitheloid cells' },
      { key: 'B', text: 'Langhans giant cells' },
      { key: 'C', text: 'Langerhans giant cells' },
      { key: 'D', text: 'Lymphocytes' }
    ],
    correctKeys: ['C'],
    answerDisplay: 'C. Langerhans giant cells',
    highYieldExplanation: 'Langerhans cells are specialized dendritic antigen-presenting cells in the skin [1]. Langhans giant cells, on the other hand, are multinucleated giant cells formed by fused macrophages, which are classic constituents of granulomas alongside epithelioid cells and lymphocytes [1].',
    whyOthersWrong: [
      { option: 'A. Epitheloid cells', explanation: 'These are activated macrophages with abundant cytoplasm resembling epithelial cells, essential to granuloma formation [1].' },
      { option: 'B. Langhans giant cells', explanation: 'These are horse-shoe arranged multinucleated giant cells characteristic of granulomatous diseases like tuberculosis [1].' },
      { option: 'D. Lymphocytes', explanation: 'These form a prominent outer rim surrounding the central collection of epithelioid cells in a granuloma [1].' }
    ],
    commonTrap: 'Due to the highly similar spelling, students often confuse Langerhans giant cells (incorrect) with Langhans giant cells (correct).'
  },
  {
    id: 'card-17',
    tag: 'VERBATIM',
    category: 'Inflammation & Granulomas',
    question: 'Caseating granulomas seen in all except?',
    options: [
      { key: 'A', text: 'Histoplasmosis' },
      { key: 'B', text: 'Sarcoidosis' },
      { key: 'C', text: 'Tuberculosis' },
      { key: 'D', text: 'Blastomycosis' }
    ],
    correctKeys: ['B'],
    answerDisplay: 'B. Sarcoidosis',
    highYieldExplanation: 'Sarcoidosis is a systemic disease characterized classically by non-caseating (non-necrotic) granulomas [1]. Infectious granulomatous diseases like tuberculosis, histoplasmosis, and blastomycosis typically present with central caseating (cheese-like) necrosis [1].',
    whyOthersWrong: [
      { option: 'A. Histoplasmosis', explanation: 'This fungal infection typically presents with caseating granulomas [1].' },
      { option: 'C. Tuberculosis', explanation: 'This bacterial infection is the classic cause of caseating granulomas [1].' },
      { option: 'D. Blastomycosis', explanation: 'This fungal infection commonly produces caseating granulomatous lesions [1].' }
    ],
    commonTrap: 'Students sometimes forget that sarcoidosis is autoimmune/idiopathic and always produces non-caseating granulomas, unlike infectious agents which tend to produce caseating necrotizing centers.'
  },
  {
    id: 'card-18',
    tag: 'VERBATIM',
    category: 'Pigments & Calcification',
    question: 'Which of the following is an exogenous pigment ?',
    options: [
      { key: 'A', text: 'Lipofuschin' },
      { key: 'B', text: 'Hemosiderin' },
      { key: 'C', text: 'Carbon' },
      { key: 'D', text: 'Melanin' }
    ],
    correctKeys: ['C'],
    answerDisplay: 'C. Carbon',
    highYieldExplanation: 'Carbon (coal dust) is an exogenous pigment introduced into the body from the external environment (via inhalation), accumulating in pulmonary macrophages (anthracosis) [1]. Lipofuscin, hemosiderin, and melanin are all synthesized endogenously within the body [1].',
    whyOthersWrong: [
      { option: 'A. Lipofuschin', explanation: 'This is an endogenous "wear-and-tear" pigment of lipid peroxidation [1].' },
      { option: 'B. Hemosiderin', explanation: 'This is an endogenous golden-yellow iron-storage pigment derived from hemoglobin breakdown [1].' },
      { option: 'D. Melanin', explanation: 'This is an endogenous brown-black pigment synthesized by melanocytes to protect against UV radiation [1].' }
    ],
    commonTrap: 'Students may confuse the terms and think lipofuscin is exogenous because of its association with aging and wear, or think carbon is endogenous due to organic chemistry definitions.'
  },
  {
    id: 'card-19',
    tag: 'VERBATIM',
    category: 'Pigments & Calcification',
    question: 'Psamomma bodies is an example for',
    options: [
      { key: 'A', text: 'Metastatic calcification' },
      { key: 'B', text: 'Calciphylaxis' },
      { key: 'C', text: 'Dystrophic calicification' },
      { key: 'D', text: 'Calcinosis cutis' }
    ],
    correctKeys: ['C'],
    answerDisplay: 'C. Dystrophic calicification',
    highYieldExplanation: 'Psammoma bodies are concentric, laminated calcified micro-structures commonly found in certain tumors (like papillary thyroid carcinoma, meningioma, or ovarian serous cystadenocarcinoma) [1]. They represent a form of dystrophic calcification, which occurs in necrotic or dying tissues in the presence of normal serum calcium levels [1].',
    whyOthersWrong: [
      { option: 'A. Metastatic calcification', explanation: 'This occurs in normal tissues due to systemic hypercalcemia [1].' },
      { option: 'B. Calciphylaxis', explanation: 'This is a rare, life-threatening syndrome of vascular calcification and skin necrosis, typically seen in end-stage renal disease.' },
      { option: 'D. Calcinosis cutis', explanation: 'This refers to localized calcium deposition in the skin/subcutaneous tissue, typically secondary to connective tissue disease, rather than the concentric tumor-associated psammoma bodies.' }
    ],
    commonTrap: 'Students sometimes mistake tumor-associated calcification for metastatic calcification, incorrectly assuming that cancer causes high calcium levels that precipitate directly.'
  },
  {
    id: 'card-20',
    tag: 'VERBATIM',
    category: 'Pigments & Calcification',
    question: 'Dystrophic calcification seen in (Select all correct answers):',
    options: [
      { key: 'A', text: 'Hyperparathyroidism' },
      { key: 'B', text: 'Atheromatous plaque' },
      { key: 'C', text: 'Renal failure' },
      { key: 'D', text: 'Monckebergs sclerosis' },
      { key: 'E', text: 'Vitamin D intoxication' }
    ],
    isMultiSelect: true,
    correctKeys: ['B', 'D'],
    answerDisplay: 'B. Atheromatous plaque and D. Monckebergs sclerosis',
    highYieldExplanation: 'Dystrophic calcification occurs locally in damaged, necrotic, or aging tissues (such as atheromatous plaques in advanced atherosclerosis and the media of medium-sized arteries in Mönckeberg\'s medial calcific sclerosis) despite normal systemic calcium levels [1].',
    whyOthersWrong: [
      { option: 'A. Hyperparathyroidism', explanation: 'This causes hypercalcemia, leading to metastatic calcification in normal tissues [1].' },
      { option: 'C. Renal failure', explanation: 'This leads to secondary hyperparathyroidism and abnormal calcium-phosphate product, causing metastatic calcification [1].' },
      { option: 'E. Vitamin D intoxication', explanation: 'This causes hypercalcemia, leading to metastatic calcification in normal tissues [1].' }
    ],
    commonTrap: 'Students often fail to distinguish between dystrophic calcification (local damage, normal serum calcium) and metastatic calcification (normal tissues, high serum calcium).'
  },
  {
    id: 'card-21',
    tag: 'VERBATIM',
    category: 'Pigments & Calcification',
    question: 'Which of the following pigments is identified by Prussian blue stain?',
    options: [
      { key: 'A', text: 'Lipofuschin' },
      { key: 'B', text: 'Carbon' },
      { key: 'C', text: 'Hemosiderin' },
      { key: 'D', text: 'Melanin' }
    ],
    correctKeys: ['C'],
    answerDisplay: 'C. Hemosiderin',
    highYieldExplanation: 'Prussian blue is a classic histochemical stain that reacts with ferric iron present in hemosiderin, producing a bright blue color that distinguishes it from other brown pigments [1].',
    whyOthersWrong: [
      { option: 'A. Lipofuschin', explanation: 'This is a brown-yellow lipid-rich pigment that does not contain iron and is Prussian blue negative [1].' },
      { option: 'B. Carbon', explanation: 'This is an inert black pigment that does not react with Prussian blue [1].' },
      { option: 'D. Melanin', explanation: 'This is a dark brown-black pigment produced by melanocytes that does not contain iron and is Prussian blue negative [1].' }
    ],
    commonTrap: 'Students often confuse hemosiderin and lipofuscin because both appear as yellow-brown granular pigments on standard H&E staining, and they forget which stain distinguishes them.'
  },
  {
    id: 'card-22',
    tag: 'VERBATIM',
    category: 'Pigments & Calcification',
    question: 'Pathologic calcification always occurs in the presence of high serum calcium levels.',
    options: [
      { key: 'A', text: 'True' },
      { key: 'B', text: 'False' }
    ],
    correctKeys: ['B'],
    answerDisplay: 'B. False',
    highYieldExplanation: 'Pathologic calcification is divided into two types: dystrophic calcification, which occurs in damaged/necrotic tissues under normal serum calcium levels, and metastatic calcification, which occurs in normal tissues due to hypercalcemia [1]. Thus, pathologic calcification does NOT always require high serum calcium [1].',
    whyOthersWrong: [
      { option: 'A. True', explanation: 'This is incorrect because dystrophic calcification—the most common form of pathologic calcification—occurs with normal serum calcium levels [1].' }
    ],
    commonTrap: 'Students often assume all abnormal calcium deposition (calcification) must stem from elevated systemic calcium levels (hypercalcemia).'
  },
  {
    id: 'card-23',
    tag: 'GENERATED',
    category: 'Neoplasia & Tumor Biology',
    question: 'Which of the following neoplasms is correctly matched with its tissue of origin and biological behavior?',
    options: [
      { key: 'A', text: 'Benign tumor of smooth muscle cells: Leiomyoma' },
      { key: 'B', text: 'Malignant tumor of cartilage: Chondroma' },
      { key: 'C', text: 'Benign tumor of columnar epithelium: Squamous cell carcinoma' },
      { key: 'D', text: 'Malignant tumor of adipocytes: Adenoma' }
    ],
    correctKeys: ['A'],
    answerDisplay: 'A. Benign tumor of smooth muscle cells: Leiomyoma',
    highYieldExplanation: 'A leiomyoma is a benign neoplasm arising from smooth muscle cells, commonly found in the uterus (fibroids) [1].',
    whyOthersWrong: [
      { option: 'B. Chondroma', explanation: 'This is a benign tumor of cartilage, whereas its malignant counterpart is a chondrosarcoma [1].' },
      { option: 'C. Adenoma', explanation: 'This is a benign tumor of columnar/glandular epithelium, whereas squamous cell carcinoma is a malignant tumor of squamous epithelium [1].' },
      { option: 'D. Liposarcoma', explanation: 'This is a malignant tumor of adipocytes, whereas an adenoma is a benign epithelial tumor [1].' }
    ],
    commonTrap: 'Students often mix up suffixes like "-oma" (typically benign, but with exceptions like lymphoma/melanoma) and "-sarcoma" (malignant mesenchymal).'
  },
  {
    id: 'card-24',
    tag: 'VERBATIM',
    category: 'Neoplasia & Tumor Biology',
    question: 'Identify all the benign tumours from the list. Select all the possible answers.',
    options: [
      { key: 'A', text: 'Lipoma' },
      { key: 'B', text: 'Papilloma' },
      { key: 'C', text: 'Carcinoma' },
      { key: 'D', text: 'Lymphoma' },
      { key: 'E', text: 'Chordoma' },
      { key: 'F', text: 'Chondroma' },
      { key: 'G', text: 'Sarcoma' },
      { key: 'H', text: 'Melanoma' }
    ],
    isMultiSelect: true,
    correctKeys: ['A', 'B', 'F'],
    answerDisplay: 'A. Lipoma, B. Papilloma, and F. Chondroma',
    highYieldExplanation: 'Lipomas (benign fatty tumors), papillomas (benign epithelial projections), and chondromas (benign cartilage tumors) are benign [1]. In contrast, carcinomas and sarcomas are malignant epithelial and mesenchymal tumors, respectively [1]. Lymphoma and melanoma are classic exceptions where the "-oma" suffix indicates highly malignant neoplasms [1].',
    whyOthersWrong: [
      { option: 'C. Carcinoma', explanation: 'This is a malignant epithelial tumor [1].' },
      { option: 'D. Lymphoma', explanation: 'This is a malignant lymphoid neoplasm [1].' },
      { option: 'E. Chordoma', explanation: 'This is a rare, malignant tumor arising from notochord remnants.' },
      { option: 'G. Sarcoma', explanation: 'This is a malignant mesenchymal tumor [1].' },
      { option: 'H. Melanoma', explanation: 'This is a malignant tumor of melanocytes [1].' }
    ],
    commonTrap: 'Students frequently fall for the "benign-sounding" suffix "-oma" in lymphoma and melanoma, misclassifying them as benign.'
  },
  {
    id: 'card-25',
    tag: 'VERBATIM',
    category: 'Neoplasia & Tumor Biology',
    question: 'Examine the gross appearance of a tumor. Choose all the terms that can be used to describe the gross appearance of a MALIGNANT tumor:',
    options: [
      { key: 'A', text: 'Ill-defined borders' },
      { key: 'B', text: 'Well-demarcated' },
      { key: 'C', text: 'Encapsulated' },
      { key: 'D', text: 'Necrotic' },
      { key: 'E', text: 'Haemorrhagic' },
      { key: 'F', text: 'Infiltrative' },
      { key: 'G', text: 'Homogenous cut surface' },
      { key: 'H', text: 'Heterogenous cut surface' }
    ],
    isMultiSelect: true,
    correctKeys: ['A', 'D', 'E', 'F', 'H'],
    answerDisplay: 'A. Ill-defined borders, D. Necrotic, E. Haemorrhagic, F. Infiltrative, and H. Heterogenous cut surface',
    highYieldExplanation: 'Malignant tumors classically demonstrate features of aggressive, unregulated growth, including poorly defined (ill-defined) or infiltrative borders, areas of necrosis and hemorrhage due to rapid growth outstripping the blood supply, and a highly heterogenous cut surface [1].',
    whyOthersWrong: [
      { option: 'B. Well-demarcated', explanation: 'This is a characteristic of benign tumors [1].' },
      { option: 'C. Encapsulated', explanation: 'This is a protective fibrous barrier typical of benign tumors [1].' },
      { option: 'G. Homogenous cut surface', explanation: 'This is characteristic of uniform, slower-growing benign tissues [1].' }
    ],
    commonTrap: 'Students might expect all tumors to look homogenous and fail to recognize that hemorrhage and necrosis are key hallmarks of malignancy.'
  },
  {
    id: 'card-26',
    tag: 'VERBATIM',
    category: 'Neoplasia & Tumor Biology',
    question: 'Examine the gross appearance of a tumor. Choose all the terms that can be used to describe the gross appearance of a BENIGN tumor:',
    options: [
      { key: 'A', text: 'Ill-defined borders' },
      { key: 'B', text: 'Well-demarcated' },
      { key: 'C', text: 'Encapsulated' },
      { key: 'D', text: 'Necrotic' },
      { key: 'E', text: 'Haemorrhagic' },
      { key: 'F', text: 'Infiltrative' },
      { key: 'G', text: 'Homogenous cut surface' },
      { key: 'H', text: 'Heterogenous cut surface' }
    ],
    isMultiSelect: true,
    correctKeys: ['B', 'C', 'G'],
    answerDisplay: 'B. Well-demarcated, C. Encapsulated, and G. Homogenous cut surface',
    highYieldExplanation: 'Benign tumors typically grow slowly and expansively, resulting in well-demarcated borders, often surrounded by a fibrous capsule, with a uniform and homogenous cut surface due to the lack of necrosis and hemorrhage [1].',
    whyOthersWrong: [
      { option: 'A. Ill-defined borders', explanation: 'This indicates tissue invasion, characteristic of malignancy [1].' },
      { option: 'D. Necrotic', explanation: 'This is a sign of rapid malignant growth outpacing blood supply [1].' },
      { option: 'E. Haemorrhagic', explanation: 'This is common in malignant tumors due to friable, neo-vascularized vessels [1].' },
      { option: 'F. Infiltrative', explanation: 'This represents direct invasion of adjacent tissues, defining malignancy [1].' },
      { option: 'H. Heterogenous cut surface', explanation: 'This reflects diverse areas of necrosis, hemorrhage, and active tumor, typical of malignancy [1].' }
    ],
    commonTrap: 'Students may confuse well-demarcated and encapsulated borders with malignant margins, forgetting that benign tumors are non-invasive and stay localized.'
  },
  {
    id: 'card-27',
    tag: 'VERBATIM',
    category: 'Neoplasia & Tumor Biology',
    question: 'What distinguishes malignant neoplasms from benign neoplasms?',
    options: [
      { key: 'A', text: 'Malignant neoplasms do not grow' },
      { key: 'B', text: 'Benign neoplasms invade surrounding tissues' },
      { key: 'C', text: 'Malignant neoplasms metastasize and invade adjacent tissues' },
      { key: 'D', text: 'Benign neoplasms are always life-threatening' }
    ],
    correctKeys: ['C'],
    answerDisplay: 'C. Malignant neoplasms metastasize and invade adjacent tissues',
    highYieldExplanation: 'The absolute pathognomonic hallmarks that distinguish malignant tumors from benign tumors are their capacity to locally invade surrounding tissues and to metastasize to distant sites [1].',
    whyOthersWrong: [
      { option: 'A. Malignant neoplasms do not grow', explanation: 'This is incorrect; malignant neoplasms grow continuously and often rapidly [1].' },
      { option: 'B. Benign neoplasms invade surrounding tissues', explanation: 'This is incorrect; benign neoplasms grow by expansion and are usually well-demarcated or encapsulated without invading [1].' },
      { option: 'D. Benign neoplasms are always life-threatening', explanation: 'This is false; most benign tumors are harmless, though exceptions exist based on location (e.g., brain).' }
    ],
    commonTrap: 'Students may focus purely on growth rate and forget that local invasiveness and metastasis are the definitive criteria of malignancy.'
  },
  {
    id: 'card-28',
    tag: 'VERBATIM',
    category: 'Neoplasia & Tumor Biology',
    question: 'Which of the following is a benign neoplasm of glandular tissue?',
    options: [
      { key: 'A', text: 'Adenocarcinoma' },
      { key: 'B', text: 'Papilloma' },
      { key: 'C', text: 'Adenoma' },
      { key: 'D', text: 'Sarcoma' }
    ],
    correctKeys: ['C'],
    answerDisplay: 'C. Adenoma',
    highYieldExplanation: 'An adenoma is a benign epithelial neoplasm of glandular origin or showing glandular differentiation [1].',
    whyOthersWrong: [
      { option: 'A. Adenocarcinoma', explanation: 'This is the malignant counterpart of an adenoma [1].' },
      { option: 'B. Papilloma', explanation: 'This is a benign epithelial tumor growing in finger-like projections, not necessarily glandular [1].' },
      { option: 'D. Sarcoma', explanation: 'This is a malignant tumor of mesenchymal (connective tissue) origin, not epithelial or glandular [1].' }
    ],
    commonTrap: 'Students often confuse adenoma (benign glandular) with adenocarcinoma (malignant glandular) due to the similar prefixes.'
  },
  {
    id: 'card-29',
    tag: 'VERBATIM',
    category: 'Neoplasia & Tumor Biology',
    question: 'How do tumours spread in the body?',
    options: [
      { key: 'A', text: 'Only through the lymphatic system' },
      { key: 'B', text: 'By direct contact with adjacent organs only' },
      { key: 'C', text: 'Via blood vessels and lymphatics as well as tissue spaces' },
      { key: 'D', text: 'They do not spread at all' }
    ],
    correctKeys: ['C'],
    answerDisplay: 'C. Via blood vessels and lymphatics as well as tissue spaces',
    highYieldExplanation: 'Malignant tumors spread through multiple concurrent pathways, including hematogenous spread (blood vessels), lymphatic spread, direct invasion (tissue spaces), and transcoelomic seeding (along body cavities) [1].',
    whyOthersWrong: [
      { option: 'A. Only through the lymphatic system', explanation: 'This is incorrect; hematogenous and direct spread are also key pathways [1].' },
      { option: 'B. By direct contact with adjacent organs only', explanation: 'This describes local invasion but ignores distant metastasis via blood and lymph [1].' },
      { option: 'D. They do not spread at all', explanation: 'This is false, as metastasis is a defining characteristic of malignant neoplasms [1].' }
    ],
    commonTrap: 'Students often assume carcinomas *only* spread lymphatically and sarcomas *only* spread hematogenously, failing to realize both can utilize multiple pathways.'
  },
  {
    id: 'card-30',
    tag: 'VERBATIM',
    category: 'Neoplasia & Tumor Biology',
    question: 'What does the TNM classification system measure?',
    options: [
      { key: 'A', text: 'The histological appearance of the tumour' },
      { key: 'B', text: 'The patient\'s age and general health' },
      { key: 'C', text: 'The extent of primary growth and secondary spread' },
      { key: 'D', text: 'The type of cancer treatment required' }
    ],
    correctKeys: ['C'],
    answerDisplay: 'C. The extent of primary growth and secondary spread',
    highYieldExplanation: 'The TNM system staging classifies cancer based on the size/extent of the primary tumor (T), the presence and extent of regional lymph node involvement (N), and the presence of distant metastasis (M) [1].',
    whyOthersWrong: [
      { option: 'A. The histological appearance of the tumour', explanation: 'This refers to the tumor grade, not its stage (TNM) [1].' },
      { option: 'B. The patient\'s age and general health', explanation: 'These are patient performance statuses, not part of the tumor-based TNM classification.' },
      { option: 'D. The type of cancer treatment required', explanation: 'While TNM stage guides treatment decisions, it is not a direct measurement of the treatment itself.' }
    ],
    commonTrap: 'Students frequently confuse tumor "grading" (histological differentiation) with tumor "staging" (TNM system measuring clinical spread).'
  },
  {
    id: 'card-31',
    tag: 'GENERATED',
    category: 'Neoplasia & Tumor Biology',
    question: 'A 58-year-old man with chronic dyspepsia presents with progressive fatigue, early satiety, and unintentional weight loss [1]. Upper endoscopy reveals an irregular, large (5x3 cm), ulcerated mass in the distal stomach [1]. Based on these features, which of the following is the most likely biological nature of this mass?',
    options: [
      { key: 'A', text: 'Benign' },
      { key: 'B', text: 'Malignant' },
      { key: 'C', text: 'Hyperplastic' },
      { key: 'D', text: 'Inflammatory' }
    ],
    correctKeys: ['B'],
    answerDisplay: 'B. Malignant',
    highYieldExplanation: 'An irregular, large, and ulcerated gastric mass in an older patient presenting with systemic red-flag symptoms (weight loss, fatigue, early satiety) is highly suggestive of gastric adenocarcinoma, which is a malignant neoplasm [1].',
    whyOthersWrong: [
      { option: 'A. Benign', explanation: 'Benign gastric lesions (like hyperplastic polyps) are typically smaller, smooth, well-demarcated, and rarely cause severe weight loss or early satiety.' },
      { option: 'C. Hyperplastic', explanation: 'Hyperplastic lesions are benign, orderly cell proliferation processes, whereas this describes an irregular, ulcerated, invasive mass.' },
      { option: 'D. Inflammatory', explanation: 'Simple gastritis or peptic ulcers can be inflammatory, but an irregular 5x3 cm mass with these clinical features strongly points to malignancy rather than a benign inflammatory pseudotumor.' }
    ],
    commonTrap: 'Students might choose "inflammatory" due to the patient\'s long history of chronic dyspepsia, overlooking the systemic warning signs of weight loss and the massive, ulcerated endoscopic appearance.'
  },
  {
    id: 'card-32',
    tag: 'GENERATED',
    category: 'Neoplasia & Tumor Biology',
    question: 'A patient with gastric cancer has a large, ulcerated, irregular mass in the distal stomach [1]. Which of the following gross features of this tumor most strongly indicates its malignant biological behavior?',
    options: [
      { key: 'A', text: 'Symmetrical margins' },
      { key: 'B', text: 'Irregular margins and infiltrative growth' },
      { key: 'C', text: 'Smooth, non-ulcerated surface' },
      { key: 'D', text: 'Encapsulated border' }
    ],
    correctKeys: ['B'],
    answerDisplay: 'B. Irregular margins and infiltrative growth',
    highYieldExplanation: 'Malignant tumors are characterized grossly by irregular, ill-defined margins, ulceration, and infiltrative growth, reflecting their tendency to invade surrounding tissues [1].',
    whyOthersWrong: [
      { option: 'A. Symmetrical margins', explanation: 'Symmetrical, neat margins are characteristic of benign, slow-growing tumors.' },
      { option: 'C. Smooth, non-ulcerated surface', explanation: 'Benign epithelial neoplasms typically maintain intact mucosal surfaces, whereas malignant ones often outgrow their blood supply and ulcerate.' },
      { option: 'D. Encapsulated border', explanation: 'An intact capsule is a hallmark of benign neoplasms, preventing invasion.' }
    ],
    commonTrap: 'Students might select ulceration as a feature of benign ulcers, forgetting that in the context of a mass, irregular margins and ulceration indicate a necrotizing, invasive malignant process.'
  },
  {
    id: 'card-33',
    tag: 'GENERATED',
    category: 'Neoplasia & Tumor Biology',
    question: 'During the histopathological examination of a gastric biopsy, which of the following microscopic features would provide the strongest evidence that a tumor is malignant?',
    options: [
      { key: 'A', text: 'Well-differentiated glandular architecture' },
      { key: 'B', text: 'Cellular uniformity and low mitotic activity' },
      { key: 'C', text: 'Pleomorphism, hyperchromatic nuclei, and abnormal mitoses' },
      { key: 'D', text: 'Preservation of normal tissue polarity' }
    ],
    correctKeys: ['C'],
    answerDisplay: 'C. Pleomorphism, hyperchromatic nuclei, and abnormal mitoses',
    highYieldExplanation: 'Microscopic hallmarks of malignancy include anaplasia (lack of differentiation), cellular and nuclear pleomorphism (variation in size and shape), hyperchromatic (darkly staining) nuclei, high nuclear-to-cytoplasmic ratio, and atypical/abnormal mitotic figures [1].',
    whyOthersWrong: [
      { option: 'A. Well-differentiated glandular architecture', explanation: 'While some malignant tumors can be well-differentiated, this feature is characteristic of benign tumors and does not provide definitive proof of malignancy.' },
      { option: 'B. Cellular uniformity', explanation: 'Benign tumors typically consist of highly uniform cells with low mitotic activity.' },
      { option: 'D. Preservation of normal tissue polarity', explanation: 'Malignant tumors typically exhibit a loss of cellular polarity and disorganized growth.' }
    ],
    commonTrap: 'Students may think any mitotic activity indicates malignancy, but the presence of *abnormal* (atypical) mitotic figures and significant pleomorphism is what distinguishes malignancy from benign hyperplasia.'
  },
  {
    id: 'card-34',
    tag: 'GENERATED',
    category: 'Neoplasia & Tumor Biology',
    question: 'Malignant gastric tumors can spread throughout the body via multiple pathways [1]. Which of the following represents three of these classic routes of tumor spread?',
    options: [
      { key: 'A', text: 'Direct invasion, lymphatic spread, and hematogenous spread' },
      { key: 'B', text: 'Active transport, endocrine transport, and interstitial leakage' },
      { key: 'C', text: 'Passive diffusion, neurogenic transport, and retrogressive spread' },
      { key: 'D', text: 'Apoptotic shedding, local hypertrophy, and fibrotic bridging' }
    ],
    correctKeys: ['A'],
    answerDisplay: 'A. Direct invasion, lymphatic spread, and hematogenous spread',
    highYieldExplanation: 'Malignant tumors spread locally via direct invasion of adjacent tissues, and distantly via lymphatic vessels (regional lymph nodes), blood vessels (hematogenous spread to organs like the liver), or transcoelomic (peritoneal) seeding [1].',
    whyOthersWrong: [
      { option: 'B, C, D', explanation: 'These options contain pseudoscientific or incorrect physiological terms that do not represent established routes of oncological metastasis.' }
    ],
    commonTrap: 'Students might look for "transcoelomic seeding" and ignore other correct combinations, or select options with complex-sounding but clinically incorrect terms like "retrogressive spread."'
  },
  {
    id: 'card-35',
    tag: 'GENERATED',
    category: 'Neoplasia & Tumor Biology',
    question: 'Six months after being diagnosed with an ulcerated gastric mass, a patient is found to have tumor deposits in the liver [1]. Based on this finding, which of the following is the stage of this patient\'s cancer?',
    options: [
      { key: 'A', text: 'Stage I' },
      { key: 'B', text: 'Stage II' },
      { key: 'C', text: 'Stage III' },
      { key: 'D', text: 'Stage IV' }
    ],
    correctKeys: ['D'],
    answerDisplay: 'D. Stage IV',
    highYieldExplanation: 'The presence of tumor deposits in the liver represents distant metastasis (M1) from a primary gastric cancer, which automatically classifies the cancer as Stage IV (advanced stage) regardless of tumor size or nodal involvement [1].',
    whyOthersWrong: [
      { option: 'A, B, C', explanation: 'Stages I through III represent localized or regional disease (varying primary tumor size and local lymph node involvement) without distant organ metastasis.' }
    ],
    commonTrap: 'Students may confuse regional lymph node spread with distant organ metastasis and underestimate the stage as Stage III instead of recognizing that any distant metastasis dictates Stage IV.'
  },
  {
    id: 'card-36',
    tag: 'GENERATED',
    category: 'Microbiology & Host Response',
    question: 'A 58-year-old patient\'s gastric cancer is described by his physician as being associated with a specific chronic bacterial infection [1]. Which of the following is the causative organism and its Gram stain classification?',
    options: [
      { key: 'A', text: 'Helicobacter pylori, Gram-negative' },
      { key: 'B', text: 'Helicobacter pylori, Gram-positive' },
      { key: 'C', text: 'Streptococcus pyogenes, Gram-positive' },
      { key: 'D', text: 'Escherichia coli, Gram-negative' }
    ],
    correctKeys: ['A'],
    answerDisplay: 'A. Helicobacter pylori, Gram-negative',
    highYieldExplanation: 'Helicobacter pylori is a spiral-shaped, Gram-negative bacterium that chronically infects the stomach, causing persistent mucosal inflammation (gastritis), peptic ulcer disease, and significantly increasing the risk of gastric adenocarcinoma and MALT lymphoma [1].',
    whyOthersWrong: [
      { option: 'B. Helicobacter pylori, Gram-positive', explanation: 'H. pylori is Gram-negative, not Gram-positive [1].' },
      { option: 'C. Streptococcus pyogenes', explanation: 'This is a Gram-positive coccus responsible for skin and pharyngeal infections, not gastric cancer.' },
      { option: 'D. Escherichia coli', explanation: 'While it is a Gram-negative rod, it is an intestinal commensal/pathogen and is not associated with gastric cancer.' }
    ],
    commonTrap: 'Students may correctly identify H. pylori but misremember its Gram stain status as Gram-positive.'
  },
  {
    id: 'card-37',
    tag: 'GENERATED',
    category: 'Microbiology & Host Response',
    question: 'Apart from Helicobacter pylori, which of the following pairs of bacterial pathogens are also classified as Gram-negative organisms?',
    options: [
      { key: 'A', text: 'Staphylococcus aureus and Streptococcus pyogenes' },
      { key: 'B', text: 'Escherichia coli and Pseudomonas aeruginosa' },
      { key: 'C', text: 'Bacillus anthracis and Clostridium difficile' },
      { key: 'D', text: 'Corynebacterium diphtheriae and Listeria monocytogenes' }
    ],
    correctKeys: ['B'],
    answerDisplay: 'B. Escherichia coli and Pseudomonas aeruginosa',
    highYieldExplanation: 'Both Escherichia coli and Pseudomonas aeruginosa are classic medically important Gram-negative bacteria [1].',
    whyOthersWrong: [
      { option: 'A. Staphylococcus aureus and Streptococcus pyogenes', explanation: 'Both are Gram-positive cocci [1].' },
      { option: 'C. Bacillus anthracis and Clostridium difficile', explanation: 'Both are Gram-positive bacilli.' },
      { option: 'D. Corynebacterium diphtheriae and Listeria monocytogenes', explanation: 'Both are Gram-positive bacilli.' }
    ],
    commonTrap: 'Students often struggle to memorize the Gram stain classification of common bacilli and may confuse Gram-negative rods with Gram-positive ones.'
  },
  {
    id: 'card-38',
    tag: 'GENERATED',
    category: 'Microbiology & Host Response',
    question: 'Pathogenic bacteria employ various structural and biochemical components to facilitate host colonization and disease [1]. Which of the following pairs represents common virulence factors used by bacteria?',
    options: [
      { key: 'A', text: 'Capsule and toxins (such as endotoxin/LPS)' },
      { key: 'B', text: 'Ribosomal RNA and cell membrane phospholipids' },
      { key: 'C', text: 'Mitochondria and nuclear membrane proteins' },
      { key: 'D', text: 'Myelin sheaths and histones' }
    ],
    correctKeys: ['A'],
    answerDisplay: 'A. Capsule and toxins (such as endotoxin/LPS)',
    highYieldExplanation: 'Bacterial virulence factors include structures like capsules (which prevent phagocytosis), adhesins/pili (for cell attachment), flagella (for motility), and toxins (exotoxins or endotoxins like LPS) that cause host tissue damage [1].',
    whyOthersWrong: [
      { option: 'B. Ribosomal RNA and cell membrane phospholipids', explanation: 'These are basic cellular structural components found in all living bacteria, not specialized virulence factors.' },
      { option: 'C. Mitochondria and nuclear membrane proteins', explanation: 'Bacteria are prokaryotes and lack mitochondria and nuclei.' },
      { option: 'D. Myelin sheaths and histones', explanation: 'Myelin is a eukaryotic nervous system structure, and classical bacteria do not possess myelin or eukaryotic histones.' }
    ],
    commonTrap: 'Students might choose options containing general biological structures, failing to focus on the specific definitions of virulence factors that enhance pathogenicity.'
  },
  {
    id: 'card-39',
    tag: 'GENERATED',
    category: 'Microbiology & Host Response',
    question: 'In patients infected with Helicobacter pylori, what is the most likely chronic direct effect of the infection on the gastric mucosa?',
    options: [
      { key: 'A', text: 'Acute coagulative necrosis' },
      { key: 'B', text: 'Chronic gastritis / chronic mucosal inflammation' },
      { key: 'C', text: 'Transient hypertrophy without inflammatory cells' },
      { key: 'D', text: 'Acute lobar pneumonia' }
    ],
    correctKeys: ['B'],
    answerDisplay: 'B. Chronic gastritis / chronic mucosal inflammation',
    highYieldExplanation: 'Helicobacter pylori infection causes chronic superficial gastritis, which is characterized by a mononuclear inflammatory infiltrate in the gastric mucosa [1]. Over time, this chronic inflammation can progress to atrophic gastritis, intestinal metaplasia, dysplasia, and ultimately gastric cancer [1].',
    whyOthersWrong: [
      { option: 'A. Acute coagulative necrosis', explanation: 'This is typical of ischemic cell death (infarction), not the chronic inflammatory response to H. pylori.' },
      { option: 'C. Transient hypertrophy without inflammatory cells', explanation: 'H. pylori causes a pronounced inflammatory response (gastritis), not isolated non-inflammatory hypertrophy.' },
      { option: 'D. Acute lobar pneumonia', explanation: 'This is a lung infection, typically caused by Streptococcus pneumoniae, unrelated to gastric H. pylori.' }
    ],
    commonTrap: 'Students may focus too much on the cancer endpoint and forget that the chronic, underlying, day-to-day pathological effect of H. pylori is chronic gastritis.'
  },
  {
    id: 'card-40',
    tag: 'GENERATED',
    category: 'Microbiology & Host Response',
    question: 'A 10-year-old boy presents with a tender, warm, erythematous swelling on his thigh with central fluctuance [1]. A Gram stain of the purulent drainage reveals Gram-positive cocci arranged in clusters [1]. Which genus is most likely?',
    options: [
      { key: 'A', text: 'Streptococcus' },
      { key: 'B', text: 'Staphylococcus' },
      { key: 'C', text: 'Neisseria' },
      { key: 'D', text: 'Pseudomonas' }
    ],
    correctKeys: ['B'],
    answerDisplay: 'B. Staphylococcus',
    highYieldExplanation: 'Gram-positive cocci arranged in clusters are the classic microscopic morphology of the genus Staphylococcus (e.g., Staphylococcus aureus, a leading cause of skin abscesses and soft tissue infections) [1].',
    whyOthersWrong: [
      { option: 'A. Streptococcus', explanation: 'These are Gram-positive cocci that typically arrange in pairs or chains, not clusters [1].' },
      { option: 'C. Neisseria', explanation: 'These are Gram-negative diplococci [1].' },
      { option: 'D. Pseudomonas', explanation: 'These are Gram-negative bacilli [1].' }
    ],
    commonTrap: 'Students often confuse the microscopic arrangement of Staphylococcus (clusters/grapes) with Streptococcus (chains).'
  },
  {
    id: 'card-41',
    tag: 'GENERATED',
    category: 'Microbiology & Host Response',
    question: 'A pediatric patient presents with recurrent bacterial skin abscesses since early childhood, requiring multiple courses of antibiotics and surgical drainage [1]. Which of the following immunologic abnormalities represent primary general reasons for such recurrent infections?',
    options: [
      { key: 'A', text: 'Elevated mucosal IgA and hyperactive T-cell activity' },
      { key: 'B', text: 'Defective neutrophils/phagocytosis and impaired bacterial killing' },
      { key: 'C', text: 'Hyperactive complement cascade and increased skin barrier thickness' },
      { key: 'D', text: 'Complete absence of eosinophils and overactive NK cells' }
    ],
    correctKeys: ['B'],
    answerDisplay: 'B. Defective neutrophils/phagocytosis and impaired bacterial killing',
    highYieldExplanation: 'Recurrent pyogenic (pus-forming) bacterial infections, especially skin abscesses, are highly characteristic of defects in phagocyte number or function (e.g., defective neutrophils, impaired phagocytosis, or impaired intracellular killing like in Chronic Granulomatous Disease) or defects in opsonization [1].',
    whyOthersWrong: [
      { option: 'A. Elevated mucosal IgA', explanation: 'Elevated IgA would enhance mucosal immunity, not cause recurrent skin infections; hyperactive T-cells are not associated with recurrent pyogenic bacterial infections.' },
      { option: 'C. Hyperactive complement', explanation: 'This would increase inflammatory responses, whereas complement deficiencies (reduced opsonization) lead to infections.' },
      { option: 'D. Absence of eosinophils', explanation: 'Eosinophils are primarily involved in parasitic infections and allergic reactions, not pyogenic skin abscesses.' }
    ],
    commonTrap: 'Students often confuse the clinical presentations of T-cell defects (viral and fungal infections) with neutrophil/phagocyte defects (recurrent bacterial and fungal skin/soft tissue infections).'
  },
  {
    id: 'card-42',
    tag: 'GENERATED',
    category: 'Inflammation & Granulomas',
    question: 'A surgeon performs an incision and drainage on a tense, painful thigh swelling, releasing thick yellowish pus [1]. Which of the following best describes the primary composition of this purulent material?',
    options: [
      { key: 'A', text: 'Lymphocytes and extracellular collagen matrix' },
      { key: 'B', text: 'Neutrophils and necrotic cell debris' },
      { key: 'C', text: 'Epithelioid cells and multinucleated giant cells' },
      { key: 'D', text: 'Erythrocytes and fibrin thrombi' }
    ],
    correctKeys: ['B'],
    answerDisplay: 'B. Neutrophils and necrotic cell debris',
    highYieldExplanation: 'Pus (purulent exudate) is a thick fluid composed primarily of viable and necrotic neutrophils (polymorphonuclear leukocytes), liquified necrotic parenchymal cells, and tissue debris, typically triggered by pyogenic bacterial infections [1].',
    whyOthersWrong: [
      { option: 'A. Lymphocytes', explanation: 'These are chronic inflammatory cells and do not form pus.' },
      { option: 'C. Epithelioid cells', explanation: 'These are found in granulomas (chronic granulomatous inflammation), not acute purulent abscesses [1].' },
      { option: 'D. Erythrocytes and fibrin thrombi', explanation: 'These describe a blood clot or hemorrhagic exudate, not purulent exudate.' }
    ],
    commonTrap: 'Students may think pus is primarily made of bacteria itself, whereas it is actually composed mostly of host neutrophils and dead host tissue.'
  },
  {
    id: 'card-43',
    tag: 'GENERATED',
    category: 'Inflammation & Granulomas',
    question: 'During the acute inflammatory response in a skin infection, the affected area becomes visibly red (rubor) and warm (calor) [1]. Which of the following vascular changes is the direct cause of these signs?',
    options: [
      { key: 'A', text: 'Vasoconstriction of local arterioles' },
      { key: 'B', text: 'Vasodilation of local arterioles and increased blood flow' },
      { key: 'C', text: 'Direct endothelial cell necrosis leading to hemorrhage' },
      { key: 'D', text: 'Complete blockage of lymphatic drainage' }
    ],
    correctKeys: ['B'],
    answerDisplay: 'B. Vasodilation of local arterioles and increased blood flow',
    highYieldExplanation: 'Vasodilation is one of the earliest hemodynamic changes in acute inflammation [1]. It involves arterioles, leading to increased blood flow (hyperemia) to the injured area, which clinically manifests as redness (rubor) and warmth (calor) [1].',
    whyOthersWrong: [
      { option: 'A. Vasoconstriction', explanation: 'This is a transient, fleeting initial response (lasting seconds) that decreases blood flow, causing pallor, not redness/warmth.' },
      { option: 'C. Endothelial cell necrosis', explanation: 'This leads to vascular leakage and hemorrhage but is not the physiologic mechanism behind the standard warmth and erythema of acute inflammation.' },
      { option: 'D. Blockage of lymphatic drainage', explanation: 'This leads to lymphedema, not the active hyperemia (vasodilation) that causes redness and warmth.' }
    ],
    commonTrap: 'Students may confuse the transient vasoconstriction (an immediate, temporary reflex) with the prolonged vasodilation that actually causes the red, warm clinical signs.'
  },
  {
    id: 'card-44',
    tag: 'GENERATED',
    category: 'Genetics & Inheritance',
    question: 'A 10-year-old boy and his father both suffered from recurrent skin boils and chest infections during childhood [1]. Other family members across multiple generations are also affected, and there is no history of consanguinity [1]. Which mode of inheritance is most likely?',
    options: [
      { key: 'A', text: 'Autosomal recessive' },
      { key: 'B', text: 'X-linked recessive' },
      { key: 'C', text: 'Autosomal dominant' },
      { key: 'D', text: 'Mitochondrial' }
    ],
    correctKeys: ['C'],
    answerDisplay: 'C. Autosomal dominant',
    highYieldExplanation: 'The transmission of a trait from an affected parent to an affected child across multiple generations (vertical transmission), affecting both males and females without consanguinity, is highly characteristic of an autosomal dominant mode of inheritance [1].',
    whyOthersWrong: [
      { option: 'A. Autosomal recessive', explanation: 'This typically presents in a single generation (horizontal transmission) among siblings, and is often associated with consanguinity.' },
      { option: 'B. X-linked recessive', explanation: 'This typically affects males exclusively, transmitted through unaffected carrier females, and does not show direct father-to-son transmission.' },
      { option: 'D. Mitochondrial', explanation: 'This is inherited exclusively from the mother, as sperm do not contribute mitochondria to the zygote; an affected father would not pass it to his children.' }
    ],
    commonTrap: 'Students often assume rare genetic immune defects must be autosomal recessive, ignoring the clear vertical pedigree indicating autosomal dominant inheritance in this case.'
  },
  {
    id: 'card-45',
    tag: 'GENERATED',
    category: 'Genetics & Inheritance',
    question: 'In a classic autosomal dominant disorder, what is the minimum number of mutated alleles required for an individual to express the clinical phenotype?',
    options: [
      { key: 'A', text: 'One mutated allele' },
      { key: 'B', text: 'Two mutated alleles' },
      { key: 'C', text: 'Three mutated alleles' },
      { key: 'D', text: 'Four mutated alleles' }
    ],
    correctKeys: ['A'],
    answerDisplay: 'A. One mutated allele',
    highYieldExplanation: 'Autosomal dominant inheritance means that a single copy of the mutated gene (one mutated allele on one of the autosomes) is sufficient to cause the disease [1]. The individual is heterozygous for the mutation.',
    whyOthersWrong: [
      { option: 'B. Two mutated alleles', explanation: 'This is required for autosomal recessive disorders (homozygous state) to express the phenotype.' },
      { option: 'C, D', explanation: 'Humans are diploid organisms and possess only two alleles per autosomal gene locus; thus, three or four mutated alleles are not possible under normal genetic circumstances.' }
    ],
    commonTrap: 'Students can confuse dominant with recessive and think "dominant" means both alleles must be mutated to dominate the genome.'
  },
  {
    id: 'card-46',
    tag: 'GENERATED',
    category: 'Genetics & Inheritance',
    question: 'If a father is heterozygous for an autosomal dominant immunodeficiency and the mother is genetically unaffected, what is the probability that any given offspring will inherit the condition?',
    options: [
      { key: 'A', text: '25% (1 in 4)' },
      { key: 'B', text: '50% (1 in 2)' },
      { key: 'C', text: '75% (3 in 4)' },
      { key: 'D', text: '100% (4 in 4)' }
    ],
    correctKeys: ['B'],
    answerDisplay: 'B. 50% (1 in 2)',
    highYieldExplanation: 'A heterozygous affected individual (Aa) has a 50% chance of passing the mutated allele (A) and a 50% chance of passing the normal allele (a) to each child [1]. Since the other parent is unaffected (aa), each child has a 50% chance of inheriting the Aa genotype and being affected [1].',
    whyOthersWrong: [
      { option: 'A. 25%', explanation: 'This is the probability of a child inheriting an autosomal recessive disease if both parents are heterozygous carriers.' },
      { option: 'C. 75%', explanation: 'This is the probability of offspring being affected if *both* parents are heterozygous for an autosomal dominant condition.' },
      { option: 'D. 100%', explanation: 'This would only occur if one parent was homozygous dominant (AA) for the autosomal dominant trait.' }
    ],
    commonTrap: 'Students may run a Punnett square for two heterozygous parents (Aa x Aa) by habit and incorrectly choose 75%.'
  },
  {
    id: 'card-47',
    tag: 'GENERATED',
    category: 'Pharmacology & ADRs',
    question: 'Two days after starting oral antibiotics for a skin infection, a child develops an itchy, erythematous rash over his trunk and arms that resolves upon stopping the drug [1]. This presentation represents which type of adverse drug reaction?',
    options: [
      { key: 'A', text: 'Type A reaction' },
      { key: 'B', text: 'Type B reaction' },
      { key: 'C', text: 'Type C reaction' },
      { key: 'D', text: 'Type D reaction' }
    ],
    correctKeys: ['B'],
    answerDisplay: 'B. Type B reaction',
    highYieldExplanation: 'Type B (bizarre) adverse drug reactions are unpredictable, independent of dose, not related to the known pharmacological action of the drug, and are typically immune-mediated (allergic/hypersensitivity reactions like an antibiotic-induced skin rash) [1].',
    whyOthersWrong: [
      { option: 'A. Type A reaction', explanation: 'These are predictable, dose-dependent, and related to the primary pharmacological action of the drug (e.g., hypoglycemia from insulin).' },
      { option: 'C. Type C reaction', explanation: 'These are associated with long-term, cumulative drug use (e.g., analgesic nephropathy).' },
      { option: 'D. Type D reaction', explanation: 'These are delayed effects, such as teratogenicity or carcinogenesis (e.g., vaginal adenocarcinoma in daughters of women who took diethylstilbestrol).' }
    ],
    commonTrap: 'Students might choose Type A because antibiotics are "active" substances, failing to recognize that an allergic rash is a classic unpredictable "Type B" host response.'
  },
  {
    id: 'card-48',
    tag: 'GENERATED',
    category: 'Pharmacology & ADRs',
    question: 'Which of the following features correctly justifies the classification of an antibiotic-induced skin rash as a Type B adverse drug reaction?',
    options: [
      { key: 'A', text: 'It is predictable and strictly dose-dependent' },
      { key: 'B', text: 'It is directly related to the primary pharmacological killing action of the antibiotic' },
      { key: 'C', text: 'It is unpredictable, not dose-dependent, and typically immune-mediated' },
      { key: 'D', text: 'It only occurs after many years of cumulative, continuous drug exposure' }
    ],
    correctKeys: ['C'],
    answerDisplay: 'C. It is unpredictable, not dose-dependent, and typically immune-mediated',
    highYieldExplanation: 'Type B reactions are idiosyncratic, host-dependent reactions that cannot be predicted from the drug\'s primary pharmacology, are not dose-related (even minute amounts can trigger them), and typically involve hypersensitivity/allergic mechanisms [1].',
    whyOthersWrong: [
      { option: 'A. Predictable and dose-dependent', explanation: 'This describes Type A reactions, not Type B.' },
      { option: 'B. Related to primary pharmacological action', explanation: 'This also describes Type A reactions.' },
      { option: 'D. Occurs after years of cumulative exposure', explanation: 'This describes Type C (chronic) reactions.' }
    ],
    commonTrap: 'Students sometimes believe allergic reactions are dose-dependent because they think "more drug equals a bigger rash," missing the fundamental distinction that Type B reactions occur at sub-therapeutic doses in sensitized individuals.'
  }
];

export const CATEGORIES: Category[] = [
  'All',
  'Cellular Adaptations',
  'Cell Injury & Hypoxia',
  'Inflammation & Granulomas',
  'Pigments & Calcification',
  'Neoplasia & Tumor Biology',
  'Microbiology & Host Response',
  'Genetics & Inheritance',
  'Pharmacology & ADRs'
];
