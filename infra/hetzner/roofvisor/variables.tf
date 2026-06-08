variable "ssh_public_key" {
  type        = string
  description = "The public SSH key to import into Hetzner Cloud for root access."
  default     = "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIA08C6EvDjFfOuo02v3k3NcfvQi17EJnO7521p1+mJLv jimmy@leadzer.io"
}

variable "ssh_key_name" {
  type        = string
  description = "Name of the SSH key in Hetzner Cloud."
  default     = "jimmy-main-laptop"
}

variable "server_name" {
  type        = string
  description = "The name of the physical/virtual server instance."
  default     = "roofvisor-web-01"
}

variable "server_type" {
  type        = string
  description = "Hetzner server type / instance size."
  default     = "cpx11"
}

variable "image" {
  type        = string
  description = "OS Image name."
  default     = "ubuntu-24.04"
}

variable "location" {
  type        = string
  description = "Hetzner location code."
  default     = "ash"
}
