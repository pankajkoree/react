import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

const page = () => {
  return (
    <>
      <h1
        className={`relative flex justify-center text-3xl bg-green-600 text-white text-center p-2 ${poppins.className}`}
      >
        Font optimization in Next JS
      </h1>

      <div className="relative flex p-4 flex-col">
        <p
          className={`relative p-4 border-2 border-black text-xl rounded-lg ${poppins.className}`}
        >
          A paragraph is a series of sentences that are organized and coherent,
          and are all related to a single topic. Almost every piece of writing
          you do that is longer than a few sentences should be organized into
          paragraphs. This is because paragraphs show a reader where the
          subdivisions of an essay begin and end, and thus help the reader see
          the organization of the essay and grasp its main points. Paragraphs
          can contain many different kinds of information. A paragraph could
          contain a series of brief examples or a single long illustration of a
          general point. It might describe a place, character, or process;
          narrate a series of events; compare or contrast two or more things;
          classify items into categories; or describe causes and effects.
          Regardless of the kind of information they contain, all paragraphs
          share certain characteristics. One of the most important of these is a
          topic sentence.
        </p>

        <p
          className={`relative p-4 border-2 border-black text-xl rounded-lg top-2 ${poppins.className}`}
        >
          A well-organized paragraph supports or develops a single controlling
          idea, which is expressed in a sentence called the topic sentence. A
          topic sentence has several important functions: it substantiates or
          supports an essay’s thesis statement; it unifies the content of a
          paragraph and directs the order of the sentences; and it advises the
          reader of the subject to be discussed and how the paragraph will
          discuss it. Readers generally look to the first few sentences in a
          paragraph to determine the subject and perspective of the paragraph.
          That’s why it’s often best to put the topic sentence at the very
          beginning of the paragraph. In some cases, however, it’s more
          effective to place another sentence before the topic sentence—for
          example, a sentence linking the current paragraph to the previous one,
          or one providing background information. Although most paragraphs
          should have a topic sentence, there are a few situations when a
          paragraph might not need a topic sentence. For example, you might be
          able to omit a topic sentence in a paragraph that narrates a series of
          events, if a paragraph continues developing an idea that you
          introduced (with a topic sentence) in the previous paragraph, or if
          all the sentences and details in a paragraph clearly refer—perhaps
          indirectly—to a main point. The vast majority of your paragraphs,
          however, should have a topic sentence.
        </p>
        <p
          className={`relative p-4 border-2 border-black text-xl rounded-lg top-4 ${poppins.className}`}
        >
          Font optimization, we can use the traditional way but due to problem
          of sending request everytime when we refresh means not getting into
          cache and the user can know what font we are using so to avoid that
          use, next js font optimization
        </p>
      </div>
    </>
  );
};

export default page;
