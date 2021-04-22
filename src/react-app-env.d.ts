/// <reference types="react-scripts" />


type TSong = {
  id: number,
  title: string,
  path: string,
  author: string
}

type TSongList = {
  playlistId: number,
  songList: Array<TSong>
}

type TPlaylist = {
  id: number,
  cover: string,
  playlistName: string
}

type TPlaylistSongList = TPlaylist[]

type TFormData = {
  email: string;
  confirmEmail: string;
  password: string;
  name: string;
  birth: string;
  gender: string;
}