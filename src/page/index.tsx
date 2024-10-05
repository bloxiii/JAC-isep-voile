import React, { useEffect } from "react";
import './index.css';
import { createTask, deleteTask, getAllTasks } from "../data";
import { ITask } from "../types/task";
import { createRoot } from "react-dom/client";
import Popup from 'reactjs-popup';




export default function ComponentA() {

  const [title, setTitle] = React.useState("");
  const [auteur, setAuteur] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [delai, setDelai] = React.useState("");
  const [tasks, setTasks] = React.useState<ITask[]>([]);

  useEffect(() => {
    getAllTasks().then((tasks) => {
      setTasks(tasks);
    });
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const newTask: ITask = {
      title,
      id: "",
      description,
      delai,
      status: 0
    };

    createTask(newTask).then((response) => {
      console.log(response);
    });

    setTasks([...tasks, newTask]);
    setTitle("");
  };

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const handleChangeDelai = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setDelai(event.target.value);
  };


  const handleChangeDescription = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setDescription(event.target.value);
  };

  const openPage1 = () => {
    window.location.href = '/page1';
  };

  const openPage2 = () => {
    window.location.href = '/task';
  };

  const openPage3 = () => {
    window.location.href = '/prospects';
  };

  const openPage4 = () => {
    window.location.href = '/profil';
  };


  return (
    <div className='principal'>
      <div className='flex1'>
        <div className='priorité'>
          <button className='bouton-prio'>
            <div className='priorité1' />
            <span className="priorité2">
              Priorité
            </span>
          </button>
          <button className='nonassigner1'>
            <div className='nonassigner2' />
            <span className="nonassigner3">
              Non assignée
            </span>
          </button>
        </div>
        <Popup trigger={<button className='nouvelletask1'>
          <div className='nouvelletask2'>
            <div className='logo_task' />
            <div className="Text_nouvelle_tache">Nouvelle tâche</div>
          </div>
        </button>} >
          <div className='modal' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <div className="container">
              <h1 className='h1-new-task'>Nouvelle tâche</h1>
              <form onSubmit={handleSubmit} action="#">
                <label htmlFor="titre">Titre de la tâche</label>
                <input className='input-padding'
                  type="text"
                  id="titre"
                  name="titre"
                  value={title}
                  onChange={handleChangeTitle}
                  placeholder="Entrez le titre de la tâche"
                />
                <label htmlFor="auteur">Auteur</label>
                <input className='input-padding'
                  type="text"
                  id="auteur"
                  name="auteur"
                  placeholder="Entrez le nom de l'auteur"
                />
                <label htmlFor="details">Détails</label>
                <textarea className='input-padding'
                  id="details"
                  value={description}
                  onChange={handleChangeDescription}
                  placeholder="Entrez les détails de la tâche"
                />
                <label htmlFor="delais">Délais</label>
                <input className='input-padding'
                  type="date"
                  id="delais"
                  name="delais"
                  value={delai}
                  onChange={handleChangeDelai}
                />
                <button className='buttontask' type="submit">Créer la tâche</button>
              </form>
            </div>
          </div>
        </Popup>


      </div>
      <div className=''>
        <div className='Page11'>

          <button onClick={() => openPage1()}>
            <div className='Page111'>
              <div className='Page12'></div>
            </div>
          </button>
          <div className='Page13'>
            <button onClick={() => { openPage2() }}>
              <div className='Page21' />
            </button>
            <button onClick={() => { openPage3() }}>
              <div className='Page22' />
            </button>
            <button onClick={() => { openPage4() }}>
              <div className='Page23' />
            </button>
          </div>
          <div className='w-[calc(5*var(--rpx))] h-[calc(45*var(--rpx))] shrink-0 bg-[#272266] rounded-tl-none rounded-tr-[calc(5*var(--rpx))] rounded-br-[calc(5*var(--rpx))] rounded-bl-none absolute top-[calc(79*var(--rpx))] left-0 z-[104]' />
        </div>
        <div className="w-[calc(87*var(--rpx))] h-[calc(34*var(--rpx))] font-['Poppins'] text-[calc(8*var(--rpx))] font-normal leading-[calc(12*var(--rpx))] absolute top-[calc(27*var(--rpx))] left-[calc(1581*var(--rpx))] text-center z-[116]">
          <span className="font-['Poppins'] text-[calc(8*var(--rpx))] font-normal leading-[calc(12*var(--rpx))] text-[#272266] relative text-center">
            Réalisé par
          </span>
          <span className="font-['Poppins'] text-[calc(8*var(--rpx))] font-normal leading-[calc(12*var(--rpx))] text-[#272266] relative text-center underline">
            Junior ISEP
          </span>
        </div>
        <div className='fond1'>
          <div className='flex flex-col gap-[calc(25*var(--rpx))] items-start self-stretch grow shrink-0 basis-0 flex-nowrap rounded-[calc(15*var(--rpx))] relative overflow-hidden z-[1]'>
            <div className='flex w-[calc(130*var(--rpx))] gap-[calc(15*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[2]'>
              <div className='w-[calc(30*var(--rpx))] h-[calc(30*var(--rpx))] shrink-0 bg-[url(../assets/images/1956648f-20f5-4cdf-95c8-3f48a6e40d3f.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[3]' />
              <span className="h-[calc(39*var(--rpx))] shrink-0 basis-auto font-['Poppins'] text-[calc(26*var(--rpx))] font-medium leading-[calc(39*var(--rpx))] text-[#272266] relative text-left whitespace-nowrap z-[4]">
                A faire
              </span>
            </div>
            <ul>
              {tasks.map((task) => {
                return (<div className='task-item'>
                  <div className='flex gap-[calc(5*var(--rpx))] items-start self-stretch shrink-0 flex-nowrap relative z-[33]'>
                    <div className='flex flex-col items-start grow shrink-0 basis-0 flex-nowrap relative z-[34]'>
                      <span className="h-[calc(18*var(--rpx))] self-stretch shrink-0 basis-auto font-['Poppins'] text-[calc(14*var(--rpx))] font-medium leading-[calc(17.5*var(--rpx))] text-[#272266] relative text-left whitespace-nowrap z-[35]">
                        <li key={task.id}>
                          {task.title}{" "}
                        </li>
                      </span>
                      <span className="flex w-[calc(313*var(--rpx))] h-[calc(30*var(--rpx))] justify-start items-start self-stretch shrink-0 font-['Poppins'] text-[calc(10*var(--rpx))] font-light leading-[calc(15*var(--rpx))] text-[#272266] relative text-left z-[36]">
                        {task.description}
                      </span>
                    </div>
                    <div className='w-[calc(12*var(--rpx))] h-[calc(12*var(--rpx))] shrink-0 bg-[url(../assets/images/f4f7e23a-1c73-4afc-ba7d-dd66cfbcfac3.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[37]' />
                  </div>
                  <div className='flex w-[calc(80.5*var(--rpx))] gap-[calc(10*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[38]'>
                    <div className='flex w-[calc(25*var(--rpx))] gap-[calc(-5*var(--rpx))] items-center shrink-0 flex-nowrap relative overflow-hidden z-[39]'>
                      <div className='w-[calc(25*var(--rpx))] h-[calc(25*var(--rpx))] shrink-0 relative z-40'>
                        <div className='w-full h-full bg-[url(../assets/images/66f94d3d-dcea-4fcd-b05c-a7f54f31b0ea.png)] bg-[length:100%_100%] bg-no-repeat rounded-[50%] absolute top-0 left-0 z-[41]' />
                      </div>
                    </div>
                    <div className='flex w-[calc(45.5*var(--rpx))] gap-[calc(5*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[42]'>
                      <div className='w-[calc(8.5*var(--rpx))] h-[calc(8.5*var(--rpx))] shrink-0 bg-[url(../assets/images/4fea9b15-562e-49d4-8f6e-e5aa9a830b13.png)] bg-cover bg-no-repeat relative overflow-hidden z-[43]' />
                      <span className="h-[calc(6*var(--rpx))] shrink-0 basis-auto font-['Poppins'] text-[calc(8*var(--rpx))] font-medium leading-[calc(6*var(--rpx))] text-[#272266] relative text-left whitespace-nowrap z-[44]">
                        {task.delai}
                      </span>
                    </div>
                  </div>
                </div>


                );
              })}
            </ul>


          </div>
          <div className='flex flex-col gap-[calc(25*var(--rpx))] items-start self-stretch grow shrink-0 basis-0 flex-nowrap rounded-[calc(15*var(--rpx))] relative overflow-hidden z-[45]'>
            <div className='flex w-[calc(160*var(--rpx))] gap-[calc(15*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[46]'>
              <div className='w-[calc(30*var(--rpx))] h-[calc(30*var(--rpx))] shrink-0 bg-[url(../assets/images/35b0f92a-7f35-4ffc-9648-eab360d5aca3.png)] bg-cover bg-no-repeat relative z-[47]' />
              <span className="h-[calc(39*var(--rpx))] shrink-0 basis-auto font-['Poppins'] text-[calc(26*var(--rpx))] font-medium leading-[calc(39*var(--rpx))] text-[#272266] relative text-left whitespace-nowrap z-[48]">
                En Cours
              </span>
            </div>
          </div>
          <div className='flex flex-col gap-[calc(25*var(--rpx))] items-start self-stretch grow shrink-0 basis-0 flex-nowrap rounded-[calc(15*var(--rpx))] relative overflow-hidden z-[61]'>
            <div className='flex w-[calc(157*var(--rpx))] gap-[calc(15*var(--rpx))] items-center shrink-0 flex-nowrap relative z-[62]'>
              <div className='w-[calc(34.000003814697266*var(--rpx))] h-[calc(34.000003814697266*var(--rpx))] shrink-0 bg-[url(../assets/images/31b5e654-e402-475f-93d4-57dd5d778b28.png)] bg-cover bg-no-repeat relative z-[63]' />
              <span className="h-[calc(39*var(--rpx))] shrink-0 basis-auto font-['Poppins'] text-[calc(26*var(--rpx))] font-medium leading-[calc(39*var(--rpx))] text-[#272266] relative text-left whitespace-nowrap z-[64]">
                Terminé
              </span>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}