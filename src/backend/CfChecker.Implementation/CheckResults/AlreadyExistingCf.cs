﻿//-----------------------------------------------------------------------
// <copyright file="AlreadyExistingCf.cs" company="CNVVF">
// Copyright (C) 2018 - CNVVF
//
// This file is part of Public Competition Application (PCA).
// PCA is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// PCA is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see http://www.gnu.org/licenses/.
// </copyright>
//-----------------------------------------------------------------------
namespace Services.CfChecker.Impl.CheckResults
{
    internal class AlreadyExistingCf : ICfCheckResult
    {
        public string Code => "AlreadyExistingCf";

        public string Message => "Se stai modificando una precedente iscrizione, inserisci nella casella accanto il PIN che ti è stato fornito dal sistema. Se invece è la tua prima iscrizione, lascia pure la casella vuota.";

        public ResultType Type => ResultType.Warning;
    }
}