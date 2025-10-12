'use client';

export function ButtonResume({likhna}:{likhna :string}) {
  return (
    <div className=" relative z-50">
      <button
        type="button"
        onClick={() =>
          window.open(
            'https://drive.google.com/file/d/18dtWEHm_lszeh7r8yMjg-hRBYplqzm5p/view?usp=sharing',
            '_blank'
          )
        }
        className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl"
      >
        <span>⚙️</span>
        <span className="font-semibold">{likhna}</span>
      </button>
    </div>
  );
}
