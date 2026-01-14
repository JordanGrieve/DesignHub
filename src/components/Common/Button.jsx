function Button({ title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 text-[#ff534a] border border-[#ff534a] rounded-3xl hover:bg-[#ff534a] hover:text-white transition"
    >
      {title}
    </button>
  );
}

export default Button;
