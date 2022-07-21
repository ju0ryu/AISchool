import { MdAdd } from 'react-icons/md';
import '../scss/TodoInsert.scss';
import { useState, useCallback, useEffect, useRef } from 'react';

const TodoInsert = ({ onInsert, update }) => {
  const male = useRef();
  const female = useRef();
  const [form, setForm] = useState({
    id: '',
    pw: '',
    email: '',
    gender: '',
  });
  const { id, pw, email, gender } = form;

  // 수정하기
  const onUpdate = useCallback(() => {
    const updateForm = {
      ...form,
      id: update.id,
      pw: update.pw,
      email: update.email,
      gender: update.gender,
    };
    if (male.current.value == update.gender) {
      male.current.checked = true;
    } else if (female.value == update.gender) {
      female.current.checked = true;
    }
    setForm(updateForm);
  });
  useEffect(onUpdate, [update]);

  const onChange = useCallback((e) => {
    const copyForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(copyForm);
  });
  const onSubmit = useCallback(
    (e) => {
      onInsert(id, pw, email, gender);
      e.preventDefault();
      setForm({
        id: '',
        pw: '',
        email: '',
        gender: e.target.reset(),
      });
    },
    [onInsert, form],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <div>
        <b>아이디 : </b>
        <input
          placeholder="아이디를 입력하세요"
          name="id"
          value={id}
          onChange={onChange}
        />
      </div>
      <div>
        <b>비밀번호 : </b>
        <input
          placeholder="비밀번호를 입력하세요"
          name="pw"
          value={pw}
          onChange={onChange}
        />
      </div>
      <div>
        <b>이메일 : </b>
        <input
          placeholder="이메일을 입력하세요"
          name="email"
          value={email}
          onChange={onChange}
        />
      </div>
      <div>
        <b>성별 : </b>
        <input
          type="radio"
          name="gender"
          value="남자"
          ref={male}
          onChange={onChange}
        />
        남자
        <input
          type="radio"
          name="gender"
          value="여자"
          ref={female}
          onChange={onChange}
        />{' '}
        여자
      </div>
      <button type="submit">제출</button>
    </form>
  );
};
export default TodoInsert;
